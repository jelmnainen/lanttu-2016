import React, { Component } from 'react';
import Moment from '../utils/finnishMoment';
import { Link } from 'react-router'

const defaultBg = require('../../bg.jpg')

export default class SingleItemNavigation extends Component {

  render() {
    const { author, published, title, cover } = this.props;
    const coverImg = cover ? cover : '/' + defaultBg;
    const navStyles = {
      backgroundImage: 'url(' + coverImg + ')'
    }

    return (
      <div className="site-wrapper short-cover" style={navStyles}>
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <div id="nav-container" className="masthead clearfix">
              <div className="inner">
                <h3 className="masthead-brand">Joke-LAN</h3>
                <nav>
                  <ul className="nav masthead-nav">
                    <li><Link to="/frontpage">Etusivu</Link></li>
                    <li><Link to="/frontpage#news">Uutiset</Link></li>
                    <li><Link to="/instructions">Ohjeet</Link></li>
                    <li><Link to="/frontpage#compos">Kompot</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="inner cover">
              <h1 className="cover-heading">{title}</h1>
              <p className="lead">{author}</p>
              <p className="lead">{published}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
