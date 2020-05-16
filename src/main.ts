import { app, BrowserWindow } from 'electron';
import * as path from "path";
// import './index.html';

let mainWindow: (Electron.BrowserWindow | undefined);
const createWindow = function () {
    // console.log('Ready');
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    // mainWindow.webContents.openDevTools({ mode: 'undocked' });
    mainWindow.on('closed', () => {
        mainWindow = undefined;
    });
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === undefined) {
        createWindow();
    }
});
