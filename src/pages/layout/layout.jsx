import React from 'react';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

import './style/index.scss';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
