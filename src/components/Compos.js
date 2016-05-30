import React, { Component } from 'react';

export default class Compos extends Component {

  render() {
    const { entries } = this.props;
    return(
      <div className="content compos">
        <div className="content-wrapper">
          <h2>KOMPOT</h2>
          <div className="compo-boxes">


            <div className="compo-box">
              <div className="compo-cover" style={{backgroundImage: 'url(http://www.fillmurray.com/g/600/400)'}}>
              </div>
              <div className="compo-content">
                <h4>pe-su</h4>
                <h3>DOTA 2</h3>
              </div>
              <div className="compo-footer">
                <a href="#">LUE LISÄÄ</a>
              </div>
            </div>

            <div className="compo-box">
              <div className="compo-cover" style={{backgroundImage: 'url(http://www.fillmurray.com/g/600/400)'}}>
              </div>
              <div className="compo-content">
                <h4>pe-su</h4>
                <h3>DOTA 2</h3>
              </div>
              <div className="compo-footer">
                <a href="#">LUE LISÄÄ</a>
              </div>
            </div>

            <div className="compo-box">
              <div className="compo-cover" style={{backgroundImage: 'url(http://www.fillmurray.com/g/600/400)'}}>
              </div>
              <div className="compo-content">
                <h4>pe-su</h4>
                <h3>DOTA 2</h3>
              </div>
              <div className="compo-footer">
                <a href="#">LUE LISÄÄ</a>
              </div>
            </div>

            <div className="compo-box">
              <div className="compo-cover" style={{backgroundImage: 'url(http://www.fillmurray.com/g/600/400)'}}>
              </div>
              <div className="compo-content">
                <h4>pe-su</h4>
                <h3>DOTA 2</h3>
              </div>
              <div className="compo-footer">
                <a href="#">LUE LISÄÄ</a>
              </div>
            </div>

            <div className="compo-box">
              <div className="compo-cover" style={{backgroundImage: 'url(http://www.fillmurray.com/g/600/400)'}}>
              </div>
              <div className="compo-content">
                <h4>pe-su</h4>
                <h3>DOTA 2</h3>
              </div>
              <div className="compo-footer">
                <a href="#">LUE LISÄÄ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
