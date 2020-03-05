/* eslint-disable import/no-extraneous-dependencies */
import './index.css';

import app from 'apprun';
import { ipcRenderer } from 'electron';

import Home from './Home';
import Contact from './Contact';
import About from './About';

app.on('@electron', (...arg) => ipcRenderer.send('@electron', ...arg));
ipcRenderer.on('@apprun', (_, event, ...args) => app.run(event, ...args));

const view = () => <>
  <h1>💖 Hello World!</h1>
  <p>Welcome to your Electron application using <a href="#" onclick={() => app.run('@electron', 'open-apprun')}>AppRun</a>.</p>
  <div><a href="#Home">Home</a> | <a href="#Contact">Contact</a> | <a href="#About">About</a></div>
  <div id="main"></div>
</>;

app.start(document.body, 0, view);

new Home().start('main');
new Contact().mount('main');
new About().mount('main');
