import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Profile extends Component {
  state = { showDetails: true };

  setDetails = () => {
    this.setState((prevState) => ({ showDetails: !prevState.showDetails }));
  };

  render() {
    return (
      <div className='card' style={{ width: '18rem' }}>
        <img
          className='card-img-top'
          src='http://fakeimg.pl/286x180?font=lobster'
          alt='Card cap'
        />
        <div className='card-body'>
          <h5 className='card-title'>{this.props.name}</h5>
          <p className='card-subtitle mb-2 text-muted'>{this.props.title}</p>
          <button onClick={this.setDetails} className='btn btn-primary'>
            {this.state.showDetails ? 'Hide Details' : 'Display Details'}
          </button>

          {this.state.showDetails ? (
            <p className='card-text details'>{this.props.details}</p>
          ) : null}
        </div>
      </div>
    );
  }
}


Profile.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};
