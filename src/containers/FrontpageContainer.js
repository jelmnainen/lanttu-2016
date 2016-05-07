import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ingressFetch } from '../actions/ingressActions'
import Frontpage from '../components/Frontpage';

export default class FrontpageContainer extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(ingressFetch())
  }

  render() {
    const { ingressData } = this.props;

    return(
      <Frontpage
        ingressData={ingressData}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  ingressData: state.get('ingress')
});

export default connect(mapStateToProps)(FrontpageContainer);
