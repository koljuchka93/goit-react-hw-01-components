import styled from "styled-components";

// div class="statisticsItem"
export const StatisticsItem =styled.div`
    width: 250px;
    margin: auto auto;
    text-align: center;
    border: 1px solid black;
`;
    
//  StatList ul Stat_list  
export const StatList = styled.ul`
    height: 60px;
    display: flex;
    justify-content:center;
    list-style-type: none ;
    padding: 0;
    width: 100%;
    margin: 0;
`;

// StatItem li 
export const StatItem = styled.li`
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
