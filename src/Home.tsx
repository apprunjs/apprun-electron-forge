import { app, Component } from 'apprun';

export default class HomeComponent extends Component {
  state = 'Home';

  view = state => <div>
    <h2>{state}</h2>
  </div>;

  update = {
    '#Home': state => state,
  };
}

new HomeComponent().start('main');
