import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

export default class SocialMediaIcons extends Component {

  twitterClicked = () => {
    window.open("https://twitter.com/IK790", "_blank");
  };

  linkedInClicked = () => {
    window.open("https://www.linkedin.com/in/seanfranklin7", "_blank");
  };

  gitHubClicked = () => {
    window.open("https://github.com/franklsm1", "_blank");
  };

  render() {
    return (
        <div className="social-media-icons">
          <Button
            circular
            compact
            size="large"
            color="twitter"
            icon="twitter large"
            onClick={this.twitterClicked}
          />
          <Button
            circular
            compact
            size="large"
            color="linkedin"
            icon="linkedin large"
            onClick={this.linkedInClicked}
          />
          <Button
            circular
            compact
            size="large"
            icon="github large"
            onClick={this.gitHubClicked}
          />
      </div>
    );
  }
}
