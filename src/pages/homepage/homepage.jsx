import React from 'react';

import Layout from '../layout/layout';
import { Container } from '../../components/container/container';

import './style/index.scss';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: 'Home Page',
      tfn: null,
    };

    this.getTFN = this.getTFN.bind(this);
  }

  getTFN() {
    fetch('http://www.helperutility.com/tfn')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          tfn: data.tfn || '',
        });
      });
  }

  render() {
    return (
      <div className="homepage">
        <Layout />
        <Container pageType={this.state.pageType}></Container>
        <h1>TFN Generator</h1>
        <button onClick={this.getTFN}>Generate</button>
        <div className={this.state.tfn ? 'result-wrapper' : ''}>
          {this.state.tfn}
        </div>
      </div>
    );
  }
}
