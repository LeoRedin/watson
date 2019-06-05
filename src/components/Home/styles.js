import styled from "styled-components";
import backgroundImage from "../../assets/bg.png";

// export const Wrapper = styled.div`
//   height: 100%;
//   background: url(${backgroundImage});
//   display: flex;
// `;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 1rem;
`;

export const Header = styled.h2`
  font-size: 1.1em;
  font-family: "Ropa Sans", sans-serif;
  color: #e6ffc6;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-bottom: 55px;

  @media (max-width: 425px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const Input = styled.input`
  background: none;
  font-family: "Barlow", sans-serif;
  border-radius: 6px;
  border-style: solid;
  border-color: #d4efb1;
  color: #d4efb1;
  width: 320px;
  height: 100%;
  padding: 5px;
  margin-right: 0.5rem;
  min-height: 39px;

  @media (max-width: 425px) {
    margin-bottom: 0.5rem;
    width: 100%;
  }
`;

export const Button = styled.button`
  background: none;
  resize: none;
  border-radius: 6px;
  border-style: solid;
  border-color: #d4efb1;
  color: #d4efb1;
  width: 70px;
  height: 39px;
  outline: none;
  border-width: 2px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Response = styled.div`
  background: none;
  resize: none;
  border-radius: 6px;
  border-style: solid;
  border-color: #d4efb1;
  color: #d4efb1;
  width: 400px;
  height: 140px;
  padding: 5px;
  outline: none;
  border-width: 2px;
  font-family: "Barlow", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: ${props => (props.loading ? "center" : "flex-start")};
  justify-content: ${props => (props.loading ? "center" : "space-arou")};
`;

export const Footer = styled.div`
  background: #141414;
  color: #c3bbbb;
  min-height: 1.5rem;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5rem;
  justify-content: flex-end;
`;
