import React from 'react';
import { connect } from 'dva';
import styles from './index.css';

function IndexPage(props) {
  return (
    <div className={styles.normal}>
<h1 className={styles.title}>Yay! Welcome to dva!</h1>
  <div className={styles.welcome} />
  <ul className={styles.list}>
<li>To get started, edit <code>src/index.js</code> and save to reload.</li>
  <li><a href="https://github.com/dvajs/dva">Getting Started</a></li>
  <button onClick={() => props.dispatch({ type: 'example/fetch' })}>aaaa</button>
  </ul>
  </div>
);
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
