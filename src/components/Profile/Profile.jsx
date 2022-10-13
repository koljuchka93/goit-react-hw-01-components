import PropTypes from 'prop-types';
import {Quantity, Label, Stats, Location, Tag, Name, Avatar, Descript, Wrapper, StatsBox,} from './Profile.styled'


export const Profile = ({ user : {username, tag, location, avatar, stats }}) => {
    return (
        <Wrapper>
          <Descript>
            <Avatar
              src={avatar}
              alt="User avatar"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
          </Descript>

          <Stats>
            <StatsBox>
              <Label>Followers</Label>
              <Quantity>{stats.followers}</Quantity>
            </StatsBox>
            <StatsBox>
              <Label>Views</Label>
              <Quantity>{stats.views}</Quantity>
            </StatsBox>
            <StatsBox>
              <Label>Likes</Label>
              <Quantity>{stats.likes}</Quantity>
            </StatsBox>
          </Stats>
        </Wrapper>
    );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf.isRequired,
};

export default Profile;