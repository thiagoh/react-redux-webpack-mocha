import * as React from 'react';
import { Component } from 'react';
import { connect, Provider } from 'react-redux';

export class WrapperProvider extends Provider {
  public child;
  public aaa;
  componentDidMount() {
    this.child = this.props.children;
    this.aaa = 'aaaaaaaaaaaaaaa';
  }

  render() {
    return super.render();
  }
}
