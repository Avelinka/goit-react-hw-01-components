import styled from 'styled-components';

const getStatusColor = props => {
  return props.isOnline ? 'green' : 'red';
};

export const FriendsListItem = styled.li`
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.blue};
  border-radius: ${p => p.theme.radii.md};
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(4)};
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};

  &:hover {
    background-color: ${p => p.theme.colors.blue};
  }
`;

export const FriendStatus = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${getStatusColor};
`;

export const FriendAvatar = styled.img`
  border: 2px solid ${p => p.theme.colors.blue};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -webkit-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
  -moz-box-shadow: 3px 3px 15px 1px ${p => p.theme.colors.shadowblue};
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
