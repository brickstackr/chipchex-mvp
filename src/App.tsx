import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import ButtonAppBar from './components/AppBar';
import AdvancedImageList from './components/ImageList';
import theme from './theme';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <Container>
          <ButtonAppBar />
          <AdvancedImageList />
        </Container>
      </div>
    );
  }
}

export default App;