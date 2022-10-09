export const Friend = ({ friend : { avatar, name, isOnline }}) => {
    return (
        <div class="friendslist">
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
        </div>
    );
};      