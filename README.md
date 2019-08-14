<div align="center"><br/>
    <p>
		<img src="https://i.vgy.me/J57ZV4.png">
		<br/>
		<img src="https://img.shields.io/github/release/PlutonusDev/FireChat.svg">
		<img src="https://img.shields.io/github/commits-since/PlutonusDev/FireChat/v0.0.0.svg">
		<br/>
		<img src="https://img.shields.io/github/issues/PlutonusDev/FireChat.svg">
        <img src="https://img.shields.io/github/stars/PlutonusDev/FireChat.svg">
		<img src="https://img.shields.io/github/last-commit/PlutonusDev/FireChat.svg">
        <img src="https://david-dm.org/PlutonusDev/FireChat.svg">
		<img src="https://img.shields.io/github/license/PlutonusDev/FireChat.svg">
	</p>
</div>

---

FireChat is a soon-to-be text, image, voice, and video chat application for Windows, Linux, MacOS, Android, and iOS.

---

## Development
If you would like to fully customize FireChat, add features, assist with bugs, or anything else to do with the code, I recommend cloning the repository and installing the development dependencies.

You can do this with the following command:
```bash
git clone https://github.com/PlutonusDev/FireChat.git && npm i -d
```

After making changes, you will have to compile the TypeScript to test your changes. Included are a few NPM scripts to assist you.
```bash
npm start             # Lints, Compiles, Packs, and Runs
npm run startNoBuild  # Packs, and Runs

npm run lint          # Lints
npm run lintfix       # Lints & Fixes

npm run build         # Compiles
npm run package       # Packs
```
Generally you will only need to use `npm start`

---



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)