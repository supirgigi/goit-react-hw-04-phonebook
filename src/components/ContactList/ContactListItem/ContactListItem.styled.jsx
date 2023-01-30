import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  padding: ${props => props.theme.spacing(2)};
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.03em;
`;

export const Button = styled.button`
  padding: 3px 6px;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  background-color: transparent;
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover {
    border-color: ${props => props.theme.colors.red};
    background-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
  }
`;
