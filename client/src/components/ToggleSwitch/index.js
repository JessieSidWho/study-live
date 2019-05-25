import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorChange } from '../../actions';
import './index.css';

class ToggleSwitch extends Component {
  render() {
    return (
      <div className="border border-secondary rounded-lg">
        <button className="btn btn-light" onClick={ () => this.props.colorChange('bg-light text-dark border-dark')}>Light</button>
        <button className="btn btn-secondary" onClick={ () => this.props.colorChange('bg-dark text-white border-light')}>Dark</button>
      </div>
    )
  }
}
 
function mapStateToProps({ color }) {
  return { color };
}

export default connect(mapStateToProps, { colorChange })(ToggleSwitch);

