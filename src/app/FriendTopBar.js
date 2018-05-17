import React from 'react';
import {ThemeProvider, AgentBar, 
  Avatar, Column, Title, Subtitle }  from '@livechat/ui-kit';

class FriendTopBar extends React.Component {
  render(){
    return (
    <ThemeProvider>
      <AgentBar>
      <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
      <Column>
        <Title>{'Jon Snow'}</Title>
        <Subtitle>{'Support hero'}</Subtitle>
      </Column>
    </AgentBar>
    </ThemeProvider>);
  }
}
export default FriendTopBar;