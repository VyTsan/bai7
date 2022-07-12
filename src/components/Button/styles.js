import styled from "styled-components";

export const SButton = styled.button`
  background-color: ${props => props.color};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background-color: #bf8440;
  }
`;