import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect(({ home }) => ({
  time: home.time || 0,
}), (dispatch) => ({
  update: (...args) => dispatch({ type: 'home/update', payload: {...args} }),
}))
export default class Home extends PureComponent {

  render () {
    return (
      <div>
        <h2>home</h2>
        <p>{this.props.time}</p>
        <button onClick={e => this.props.update()}>update</button>
      </div>
    );
  }
}
