import React, { Component, PropTypes } from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

export default class SignIn extends Component
{
  render() {
    return (
      <Blaze template="atForm" />
    );
  }
}