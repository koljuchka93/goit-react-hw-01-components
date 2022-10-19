import PropTypes from 'prop-types';
import { FriendsListt} from './Friend.styled';
import { FriendListItem } from './FriendItem';

export const FriendList = ({ friends }) => {
    return (
        <FriendsListt>
            {friends.map( ({avatar, name, isOnline}) => (
                    <FriendListItem 
                    avatar={avatar} 
                    name={name}
                    isOnline={isOnline}
                    /> 
            ))}
        </FriendsListt>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf.isRequired
  };

