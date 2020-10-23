const { app, BrowserWindow, ipcMain } = require('electron')

const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 720,
    minWidth: 720,
    minHeight: 480,
    maxWidth: 1920,
    maxHeight: 1080,
    frame: false,
    titleBarStyle: "hidden",
    icon: 'public/LogoHC.png',
    webPreferences: {
      nodeIntegration: true,
    },
  })

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, '../public/index.html'),
        protocol: 'file:',
        slashes: true,
      })
  )

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('maximized')
  })

  mainWindow.on('unmaximize', () => {
      mainWindow.webContents.send('unmaximized')
  })
}

ipcMain.handle('minimize-event', () => {
  mainWindow.minimize()
})

ipcMain.handle('maximize-event', () => {
  mainWindow.maximize()
})

ipcMain.handle('unmaximize-event', () => {
  mainWindow.unmaximize()
})

ipcMain.handle('close-event', () => {
  app.quit()
})

app.on('browser-window-focus', () => {
  mainWindow.webContents.send('focused')
})

app.on('browser-window-blur', () => {
  mainWindow.webContents.send('blurred')
})

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})