import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
export default class FbPage extends Component {
  render() {
    return (
      <FacebookProvider appId="666391603707983">
        <Page href="https://www.facebook.com/facebook" tabs="timeline" />
      </FacebookProvider>    
    );
  }
}