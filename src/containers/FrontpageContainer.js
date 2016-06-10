import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ingressFetch } from '../actions/ingressActions';
import { newsfeedFetch } from '../actions/newsfeedActions';
import { composFetch } from '../actions/composActions';
import { partnersFetch } from '../actions/partnersActions';

import Frontpage from '../components/Frontpage';

class FrontpageContainer extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(ingressFetch());
    dispatch(newsfeedFetch());
    dispatch(composFetch());
    dispatch(partnersFetch());
  }

  render() {
    const { ingressData, newsfeedData, composData, partnersData } = this.props;
    return(
      <Frontpage
        ingressData={ingressData}
        newsfeedData={newsfeedData}
        composData={composData}
        partnersData={partnersData}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  ingressData: state.get('ingress'),
  newsfeedData: state.get('newsfeed'),
  composData: state.get('compos'),
  partnersData: state.get('partners')
});

export default connect(mapStateToProps)(FrontpageContainer);
