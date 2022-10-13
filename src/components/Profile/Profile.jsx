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
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};