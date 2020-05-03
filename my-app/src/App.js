import React, { Component } from 'react';
import Table from './components/Table';
import logo from './logo_couleur.png'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data :[]
    }
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://assos.utc.fr/api/v1')
    .then(res => res.json())
    .then(data => this.setState({data}))
    .then(() => console.log("state", this.state.data))
    .catch((error) => console.error(error))
  }


  render(){
    return(

      <div className="App">
      <center>
      <img src={logo}/>
      <Table data={this.state.data.routes}/>
      </center>
      </div>
    )
  }
}


export default App;
