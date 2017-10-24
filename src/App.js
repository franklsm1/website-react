import React, { Component } from 'react';
import { Menu, Card, Icon } from 'semantic-ui-react'

import SocialMediaIcons from './components/SocialMediaIcons';
import './styles/css/App.css';

class App extends Component {

  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

 getAboutSean = () => {
   const description = [
   'Sean is a full stack software engineer with 6 years experience in the industry.',
   'He enjoys golf, curling and currently resides in Davidson, NC.',
 ].join(' ');
   return (<Card color='orange'>
    <Card.Content header='About Sean' />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='user' />
      4 Friends
    </Card.Content>
  </Card>
)};

getHeaderMenu = () => {
  const { activeItem } = this.state
  return (
    <Menu pointing inverted>
      <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
      <Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} />
      <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick} />
      <Menu.Menu position='right'>
        <Menu.Item>
          <SocialMediaIcons/>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {this.getHeaderMenu()}
        </div>
        <div className="App-body">
          {this.getAboutSean()}
        </div>
      </div>
    );
  }
}

export default App;
