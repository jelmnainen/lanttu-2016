import React, { Component } from 'react';

export default class Navigation extends Component {

  render() {

    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <div id="nav-container" className="masthead clearfix">
              <div className="inner">
                <h3 className="masthead-brand">Joke-LAN</h3>
                <nav>
                  <ul className="nav masthead-nav">
                    <li className="active"><a href="/">Etusivu</a></li>
                    <li><a href="#news">Uutiset</a></li>
                    <li><a href="#ohjeet">Ohjeet</a></li>
                    <li><a href="#kompot">Kompot</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="inner cover">
              <h1 className="cover-heading">Joke-LAN</h1>
              <p className="lead">21.-23. @ Jokelan koulukeskus</p>
              <p className="lead">
                <a href="#" className="btn btn-lg btn-default">Varaa konepaikkasi</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
