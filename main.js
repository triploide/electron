const electron = require('electron');
const {app, BrowserWindow} = electron;

app.on('ready', () => {
	let win = new BrowserWindow({width: 800, height: 600});
	win.loadURL(`file://${__dirname}/index.html`);
});

exports.openWindow = () => {
	let win = new BrowserWindow({width: 400, height: 300});
	win.loadURL(`file://${__dirname}/test.html`);
}