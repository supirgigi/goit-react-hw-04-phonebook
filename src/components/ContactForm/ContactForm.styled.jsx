import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  margin-bottom: ${props => props.theme.spacing(6)};
  padding: ${props => props.theme.spacing(4)}
    ${props => props.theme.spacing(10)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(4)};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(1)};
`;

export const Input = styled.input`
  border: ${props => props.theme.border};
`;

export const Button = styled.button`
  width: 120px;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  background-color: transparent;
  transition: ${props => props.theme.transition};

  :hover {
    border-color: ${props => props.theme.colors.green};
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};
  }
`;
