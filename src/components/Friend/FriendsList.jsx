import PropTypes from 'prop-types';
import { FriendsListt,Avatar, Name,Status, Item } from './Friend.styled';

export const FriendsList = ({ friends }) => {
    return (
        <FriendsListt>
            {friends.map( friend => (
                    <Item>
                    <Status isOnline={friend.isOnline}>{friend.isOnline}</Status>
                    <Avatar  src={friend.avatar} alt="User avatar" width="48" />
                    <Name>{friend.name}</Name>
                </Item>
            ))}
        </FriendsListt>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      }),
    ),
  };

