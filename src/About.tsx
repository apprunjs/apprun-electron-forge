import { app, Component } from 'apprun';

export default class AboutComponent extends Component {
  state = 'About';

  view = state => <div>
    <h2>{state}</h2>
  </div>;

  update = {
    '#About': state => state,
  };
}

new AboutComponent().mount('main');
