## Using AppRun with electron-forge

This is an app built with [AppRun](https://github.com/yysun/apprun) and Electron ([electron-forge](https://github.com/electron-userland/electron-forge)).

You can send messages from the main process (the menus) to AppRun app in the renderer process.

```javascript
submenu: [
  {
    label: 'Home',
    click: () => mainWindow.webContents.send('@apprun', '#Home'),
  },
  {
    label: 'Contact',
    click: () => mainWindow.webContents.send('@apprun', '#Contact'),
  },
  {
    label: 'About',
    click: () => mainWindow.webContents.send('@apprun', '#About'),
  },
}
```


You can also send message from AppRun app to the main process.


```html
<a href="#" onclick={() => app.run('@electron', 'open-apprun')}>AppRun</a>
```
```javascript
ipcMain.on('@electron', (_, ...args) => {
  if (args[0] === 'open-apprun') open('https://github.com/yysun/apprun');
});

```




* Use _npm start_ to start the dev server
* Use _npm run package_ to build for production
