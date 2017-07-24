import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';

import { Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import MemeItem from './meme-item';

class App extends Component {
  constructor() {
    super();
    this.state = {
      memeLimit: 10,
      text0: '',
      text1: ''
      // We choose text0 and text1 instead of topText and bottomText because
      // the API expects text0 and text1 parameters and// we want to match the API behaviour.
    };
  }

  render() {
    return (
      <div>
        <h2><u>Meme Generator</u></h2>
        <h4><i>Write Some Text</i></h4>
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>
            {' '}
            <FormControl
              type="text"
              onChange={event => this.setState({ text0: event.target.value })}></FormControl>
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>
            {' '}
            <FormControl
              type="text"
              onChange={event => this.setState({ text1: event.target.value })}></FormControl>
          </FormGroup>
        </Form>
        {
          this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
            return (
              <MemeItem key={index} meme={meme} />
            );
          })
        }
        <div className="meme-button" onClick={() => this.setState({memeLimit: this.state.memeLimit + 10})}>Load 10 more memes...</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
