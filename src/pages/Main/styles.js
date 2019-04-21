import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #FFF;
    border-radius: 3px;
    font-size: 18px;
    color: #444;
    border: ${props => (props.error ? '2px solid #F00' : 0)};
  }

  button {
    height: 55px;
    padding: 20px;
    margin-left: 10px;
    background: #63F5B8;
    color: white;
    border: 0;
    font-size: 18px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52D89F;
    }
  }
`;
