
import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';



import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
   constructor(){
   super(); 
  this.state = {
    mode:'light',
    progress:0
  }
}

 setProgress = (progress)=>{
   this.setState({progress:progress});
 }



  toggleMode = ()=>{
    if(this.state.mode==='dark'){
      this.setState({
        mode:'light'
      });

      document.body.style.backgroundColor = 'white';
      

    }

    else{
      this.setState({
        mode:'dark'
      });
      document.body.style.backgroundColor = 'darkred';
      

    }



  }
  pageSize = 15;
  render() {
    
    return (
      <>
          <Router>
        
        <NavBar mode={this.state.mode} toggleMode={this.toggleMode}/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        
      />
        <Routes>
        <Route exact path='/general' element={<News apiKey="APIkey" setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="General" mode={this.state.mode}/>}></Route>
        <Route exact path='/business' element={<News apiKey="APIkey" setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="Business" mode={this.state.mode}/>}></Route>
        <Route exact path='/entertainment' element={<News apiKey="APIkey" setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment" mode={this.state.mode}/>}></Route>
        <Route exact path='/health' element={<News apiKey="APIkey" setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="Health" mode={this.state.mode}/>}></Route>
        <Route exact path='/science' element={<News apiKey="APIkey" setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="Science" mode={this.state.mode}/>}></Route>
        <Route exact path='/sports' element={<News apiKey="APIkey" setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="Sports" mode={this.state.mode}/>}></Route>
        <Route exact path='/technology' element={<News apiKey="APIkey" setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="Technology" mode={this.state.mode}/>}></Route>
        
        
        </Routes>
        </Router>
        
      </>
    )
  }
}


