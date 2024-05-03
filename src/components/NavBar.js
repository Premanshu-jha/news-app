import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    
    

    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active active" aria-current="page" to="/general">Home</Link>
        </li>
        

        <li className="nav-item">
          <Link className="nav-link active" to="/business">Business</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/entertainment">Entertainment</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/health">Health</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/science">Science</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/sports">Sports</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/technology">Technology</Link>
        </li>
        
      </ul>
        
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggleMode}/>
  <label className={`form-check-label text-${this.props.mode==='light'?'dark':'light'}`} >Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
