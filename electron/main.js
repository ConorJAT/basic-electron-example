const {app, BrowserWindow} = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: `${__dirname}/preload.js`,
        },
    });

    win.loadFile('./hosted/homePage.html');
};

app.whenReady().then( () => {
    createWindow();

    app.on('activate', () => {
        // Mac-specific code - App can run, even when all windows are closed.
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

    app.on('window-all-closed', () => {
        if(process.platform !== 'darwin') {
            app.quit();
        }
    });
});