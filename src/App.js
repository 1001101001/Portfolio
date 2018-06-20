import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader>
            <Header title={<span><span style={{ color: '#ddd' }}>  </span><strong>VOAK PORTFOLIO</strong></span>}>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/project">Project</Link>
                    <Link to="contact">Contact</Link>
                    <Link to="aboutme">AboutMe</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                  <Link to="/resume" >Resume</Link>
                  <Link to="/project">Project</Link>
                  <Link to="contact">Contact</Link>
                  <Link to="aboutme">AboutMe</Link>
                </Navigation>
            </Drawer>
            <Content>
              <Main/>
            </Content>
        </Layout>

    </div>


    );
  }
}

export default App;
