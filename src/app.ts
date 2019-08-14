'use strict'

import * as electron from 'electron'
const app = electron.app
const Window = electron.BrowserWindow

const pageBase = `file://${__dirname}/public/`

let mainWindow; let splashWindow

function createWindow (): void {
  mainWindow = new Window({ width: 1000, height: 700, show: false })
  mainWindow.setMenu(null)
  mainWindow.loadURL(`${pageBase}index.html`)

  mainWindow.webContents.on('did-finish-load', () => {
    setTimeout(() => {
      mainWindow.show()

      if (splashWindow) {
        const splashWindowBounds = splashWindow.getBounds()
        mainWindow.setBounds(splashWindowBounds)
        mainWindow.maximize()
        splashWindow.close()
      }
    }, 3000)
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

function createSplash (): void {
  splashWindow = new Window({ width: 400, height: 100, parent: mainWindow, frame: false, show: false })
  splashWindow.loadURL(`${pageBase}splash.html`)
  splashWindow.on('closed', () => {
    splashWindow = null
  })
  splashWindow.webContents.on('did-finish-load', () => splashWindow.show())
}

app.on('ready', () => {
  createSplash()
  createWindow()
})

app.on('second-instance', () => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      return mainWindow.restore()
    }
    if (splashWindow.isMinimized()) {
      return splashWindow.restore()
    }
    return mainWindow.show()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
