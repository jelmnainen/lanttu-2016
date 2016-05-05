import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNavigationItems } from '../actions/navigationActions';
import Navigation from '../components/Navigation';

export class NavigationContainer extends Component {

  componentWillMount() {
    this.props.fetchNavigationItems();
  }

  render() {
    return(
      <Navigation
        items={this.props.navItems}
      />
    );
  }

}


const mapStateToProps = (state) => ({
  navItems: state.getIn(['navigation', 'entries']),
});

const mapDispatchToProps = (dispatch) => ({
  fetchNavigationItems() {
    dispatch(fetchNavigationItems());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
