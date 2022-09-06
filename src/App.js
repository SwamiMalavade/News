import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#052b44"}}>
        <Router>
          <NavBar />
          <Routes>
          <Route exact path="/" element={<News key="general" pageSize={6} category="general"/>}></Route>   
          <Route exact path="/technology" element={<News key="technology" pageSize={6} category="technology"/>}></Route>
          <Route exact path="/business" element={<News key="business" pageSize={6} category="business"/>}></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize={6} category="sports"/>}></Route>
          <Route exact path="/health" element={<News key="health" pageSize={6} category="health"/>}></Route>
          <Route exact path="/science" element={<News key="science" pageSize={6} category="science"/>}></Route>
        </Routes>
        </Router>
      </div>

    )
  }
}

