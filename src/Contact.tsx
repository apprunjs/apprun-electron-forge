import app, { Component } from 'apprun';

export default class extends Component {
  state = 'Contact';

  view = state => <div>
    <h2>{state}</h2>
  </div>;

  update = {
    '#Contact': state => state,
  };
}
