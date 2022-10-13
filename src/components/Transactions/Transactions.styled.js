import styled from 'styled-components';

export const TransactHistory = styled.table`
  border-collapse: collapse;
  border: 1px solid;
  width: 40%;
  margin: auto auto;
  
  th {
    background-color: #04AA6D;
    color: white;
    height: 30px;
  }
  td {
    text-align: center;
  }
  th, td {
    border-bottom: 1px solid #ddd;
    padding: 5px;
    text-align: left;
  }
  tr:nth-child(even) {background-color: #f2f2f2;}
  tr:hover {background-color: coral;}
`;
