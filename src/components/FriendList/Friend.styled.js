import styled from 'styled-components';

export const FriendsListt = styled.ul`
  width: 425px;
  margin: auto auto;
  justify-content: center;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 20px;
  box-shadow: 0 0 1em;
  padding-left: 10px;
  border-radius: 1px;
  width:100%;
`;
export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(p)=> {
    return p.isOnline ? "green" : "red" 
    }
  };
  margin: 0 10px 0 10px;
`;
export const StatusOff = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  margin: 0 10px 0 10px;
`;

export const Avatar = styled.img`
  margin: 10px;
`;
export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;