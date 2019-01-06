import styled from 'styled-components/macro'

export const Button = styled.button`
  appearance: none;
  background-color: rgba(119, 206, 251, 0.3);
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 14px;
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  padding: 10px 20px;
  transition: background-color 150ms ease-in-out;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? 'rgba(119, 206, 251, 0.3)' : 'rgba(119, 206, 251, 0.8)'};
  }

  &:focus {
    outline: none;
  }
`
