import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {

  componentDidMount() {
    window.onresize && window.onresize()
  }

  render() {

    // Reserve a place button, insert under "lead" when it's time
    // <p className="lead">
    //   <a href="#" className="btn btn-lg btn-default">Varaa konepaikkasi</a>
    // </p>
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <div id="nav-container" className="masthead clearfix">
              <div className="inner">
                <h3 className="masthead-brand">Joke-LAN</h3>
                <nav>
                  <ul className="nav masthead-nav">
                    <li><a href="/">Etusivu</a></li>
                    <li><a href="#news">Uutiset</a></li>
                    <li><Link to="/instructions#nav-container">Ohjeet</Link></li>
                    <li><a href="#compos">Kompot</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="inner cover">
              <h1 className="cover-heading">Joke-LAN</h1>
              <p className="lead">21.-23. @ Jokelan koulukeskus</p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
