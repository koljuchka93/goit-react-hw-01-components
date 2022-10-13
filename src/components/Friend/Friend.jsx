import {Avatar, Name,Status, Item } from "./Friend.styled";

export const Friend = ({
    friend: {name, isOnline, avatar}}) => {
    return (
    <Item>
        <Status isOnline={isOnline}>{isOnline}</Status>
        <Avatar  src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
    </Item>
    );
};    