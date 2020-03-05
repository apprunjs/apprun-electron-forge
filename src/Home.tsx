import { app, Component } from 'apprun';

export default class extends Component {
  state = 'Home';

  view = state => <div>
    <h2>{state}</h2>
  </div>;

  update = {
    '#Home': state => state,
  };
}
