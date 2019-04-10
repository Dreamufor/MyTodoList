import React, { Component } from 'react';
import './App.css';
//import component
import Head from './component/Head';
import Body from './component/Body';
import Footer from './component/Footer';
import {Row, Col, Card} from 'react-materialize';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <Row>
            <Col m={6} s={12} className="offset-m3">
            <Card className="card">
            <Head/>               
            <Body/>   
            <Footer/>          
            </Card>
            </Col>
        </Row>
              
       </div>
      </div>
    );
  }
}

export default App;
