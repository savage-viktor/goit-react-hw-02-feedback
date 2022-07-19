import styled from '@emotion/styled';

export const Buttons = styled.section`
  padding: 20px;
  display: flex;
  justify-content: space-around; ;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: aqua;

  /* {
    if (prop.option === 'bad') {
      background-color: red;
    }
  } */

  :hover {
    background-color: #00e9e9;
  }
`;
