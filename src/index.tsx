/* eslint-disable import/no-extraneous-dependencies */
import './index.css';

import app from 'apprun';
import { ipcRenderer } from 'electron';

app.on('@electron', (...arg) => ipcRenderer.send('@electron', ...arg));
ipcRenderer.on('@apprun', (_, event, ...args) => app.run(event, ...args));

const view = () => <>
  <h1>💖 Hello World!</h1>
  <p>Welcome to your Electron application using AppRun.</p>
</>;

app.start(document.body, 0, view);
