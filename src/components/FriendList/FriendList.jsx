import {
  FriendsList,
  FriendsListItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendsListItem key={friend.id}>
          <FriendStatus>{friend.isOnline}</FriendStatus>
          <FriendAvatar>{friend.avatar}</FriendAvatar>
          <FriendName>{friend.name}</FriendName>
        </FriendsListItem>
      ))}
    </FriendsList>
  );
};
