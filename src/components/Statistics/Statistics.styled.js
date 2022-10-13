import styled from "styled-components";

// div class="statisticsItem"
export const StatisticsItem =styled.div`
    width: 350px;
    margin: auto auto;
    
`;
    
//   .title {
//     font-size: 16p;
//     color: black;
//     text-align: center;
//     margin-top: 30px;
//     margin-bottom: 30px;

//  StatList ul Stat_list  
export const StatList = styled.ul`
    height: 60px;
    display: flex;
    list-style: none;
`;

// StatItem li 
export const StatItem = styled.li`
    width: 70px;
    border: solid 1px black;
    background-color: coral;
`;   

// StatLabel class="label"
export const Label = styled.span`
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-evenly;
`;

//  Percentage class="percentage"
export const Percentage = styled.span`
    font-size: 16px;
    display: flex;
    justify-content: space-evenly;
`;
