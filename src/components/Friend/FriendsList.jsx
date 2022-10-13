import { Friend } from './Friend';
import { FriendsListt, } from './Friend.styled';

export const FriendsList = ({ friends }) => {
    return (
        <FriendsListt>
            {friends.map( friend => (
                    <Friend friend={friend}/>
            ))}
        </FriendsListt>
    )
}