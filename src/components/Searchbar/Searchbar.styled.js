import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
export const Button = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
    1px 2px 4px 0px rgba(0, 255, 255, 0.7),
    2px 4px 8px 0px rgba(0, 255, 255, 0.7),
    2px 4px 16px 0px rgba(0, 255, 255, 0.7);
  background-color: black;
  border-radius: 6px;
  font-size: 18px;
  color: rgba(0, 255, 255, 0.7);
`;
export const Input = styled.input`
  display: inline-block;
  width: 300px;
  height: 50px;
  border: none;
  background-color: black;
  border-radius: 6px;
  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
    1px 2px 4px 0px rgba(0, 255, 255, 0.7),
    2px 4px 8px 0px rgba(0, 255, 255, 0.7),
    2px 4px 16px 0px rgba(0, 255, 255, 0.7);
  padding-left: 4px;
  padding-right: 4px;
  margin-left: 20px;
  font-size: 18px;
  color: rgba(0, 255, 255, 0.7);
`;
