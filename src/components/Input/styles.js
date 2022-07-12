import styled from "styled-components";

export const SInput = styled.input`
  padding: 10px;
  margin: 5px;
  background: ${props => props.color || 'papayawhip'};
  border: none;
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
`;