import path from 'path';
import { app, BrowserWindow, Menu, shell, Tray } from 'electron';

// add autoupdater in a future release:
//
// import update from 'update-electron-app'

const logoPath = path.join(__dirname, '../assets/image/logo_64x64.png');

const createWindow = async () => {
    const appIcon = new Tray(logoPath);
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 500,
        minHeight: 500,
        backgroundColor: '#141414',
        center: true,
        darkTheme: true,
        frame: false,
        icon: logoPath,
        show: false,
        title: 'AnimeOnsen',
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#1f1f1f',
            symbolColor: '#f2f3f8',
        },
        webPreferences: {
            backgroundThrottling: true,
            devTools: false,
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    await window.loadURL('https://animeonsen.xyz', {
        userAgent: `AnimeOnsen.app/${app.getVersion()}`,
    });
    return { window, appIcon };
};

// start app
app.whenReady().then(async () => {
    const { window, appIcon } = await createWindow();

    // show app when ready
    window.show();
    window.focus();

    // open target=_blank in host's default browser
    window.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });

    const trayMenu = Menu.buildFromTemplate([
        { enabled: false, label: 'AnimeOnsen' },
        { type: 'separator' },
        { role: 'reload', click: () => window.reload() },
        {
            label: 'Minimize to tray',
            role: 'hide',
            type: 'checkbox',
            click: (e) => window[e.checked ? 'hide' : 'show'](),
        },
        { type: 'separator' },
        { label: 'Quit', role: 'close', click: app.quit },
    ]);
    appIcon.setContextMenu(trayMenu);
    appIcon.setTitle('AnimeOnsen');
    appIcon.setToolTip('AnimeOnsen');

    app.on('activate', () => {
        // create a window if none are open
        if (!BrowserWindow.getAllWindows().length) createWindow();
    });
});

// stop app
app.on('window-all-closed', () => {
    // close app normally if host is not macOS (darwin)
    if (process.platform != 'darwin') app.quit();
});
