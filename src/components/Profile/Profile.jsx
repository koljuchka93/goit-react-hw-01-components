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
{/* Li look whats up with Box??? */}
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