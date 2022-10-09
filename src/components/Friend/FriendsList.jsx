import { Friend } from './Friend';

export const FriendsList = ({ friends }) => {
    return (
        <ul>
            {friends.map( friend => (
                <li key={friend.id}>
                    <Friend friend={friend}/>
                </li>
            ))}
        </ul>
    )
}