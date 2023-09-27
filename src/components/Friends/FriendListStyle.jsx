import React from 'react';
import styled from 'styled-components';

const FriendListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props['data-online'] ? 'green' : 'red')};
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Name = styled.p`
  font-size: 16px;
  margin: 0;
`;

const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendListItemWrapper>
    <StatusIndicator data-online={isOnline} />
    <Avatar src={avatar} alt="User avatar" />
    <Name>{name}</Name>
  </FriendListItemWrapper>
);

export default FriendListItem;
