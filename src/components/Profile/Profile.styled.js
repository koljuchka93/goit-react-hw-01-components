import styled from 'styled-components';

// Wrapper class="profile" 
export const Wrapper = styled.div`
    width: 250px;
    text-align: center;
    margin: auto auto;
    padding: 0;
    border: 1px solid  ${p => p.theme.colors.black};
    border-radius: 5px;
`;

// Descript class="description"
export const Descript = styled.div`
    width: 250px;
    height: auto;
`;

// Avatar class="avatar"
export const Avatar = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-top: 10px;
`;
//Name class="name"
export const Name = styled.p`
    font-size: 20px;
    color: #333333;
    font-weight: 700;
    margin-top: 30px;
`;
  
// class="tag"
  export const Tag = styled.p`
    font-size: 16px;
    color: #666666;
    text-align: center;
    margin-top: 10px;
`;
  // class="location"
  export const Location = styled.p`
    font-size: 15px;
    color: #97a2ae;
    line-height: 32px;
    margin-top: 10px;
    margin-bottom: 30px;
`;
  // Stats  class="stats" ul
  export const Stats = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    background-color: #f3f6f9;
    margin: 0;
`;

// StatsBox Li
export const StatsBox = styled.li`
    width: 100%;
`;

//   Label class="label"
  export const Label = styled.span`
    color: #97a2ae;
    padding-top: 22px;
    font-size: 15px;
    display: flex;
`;
// Quantity class="quantity"
  export const Quantity = styled.span`
    padding-bottom: 22px;
    line-height: 1.2;
    font-weight: bold;
    font-size: 15px;
    display: flex;
`;
