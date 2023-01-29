import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(1)};
  width: 240px;
  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const Input = styled.input`
  width: 100%;
  border: ${props => props.theme.border};
`;
