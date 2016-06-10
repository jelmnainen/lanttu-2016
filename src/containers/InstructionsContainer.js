import React, { Component } from 'react';
import { connect } from 'react-redux';

import Instructions from '../components/Instructions';
import SingleItemNavigation from '../components/SingleItemNavigation'
import { instructionsFetch } from '../actions/InstructionsActions'

class InstructionsContainer extends Component {

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(instructionsFetch());
  }

  render() {
    const { instructionsData } = this.props
    return(
      <div>
        <SingleItemNavigation
          title="Ohjeet"
        />
        <Instructions
          instructions={instructionsData.get('entries')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  instructionsData: state.get('instructions')
})

export default connect(mapStateToProps)(InstructionsContainer);
