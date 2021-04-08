import styled from "styled-components";
import colors from "styles/colors";

export const Wrapper = styled.div`
  height: 100vh;
  background: ${colors.primaryBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 300px;
    margin-right: 10px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  z-index: 0;
  left: 100px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-width: 400px;
  margin: auto;
  background: #c4c4c424;
  border-radius: 12px;
  z-index: 2;
  box-shadow: 1px 1px 13px 0px black;
`;

export const LogoWrapper = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`;

export const FormTitle = styled.h2`
  color: ${colors.primaryPink};
`;

export const PasswordInput = styled.input`
  background: none;
  border: 2px solid ${colors.primaryPink};
  padding: 20px 25px;
  width: 100%;
  border-radius: 12px;
  outline: none;
  margin: 20px 0;
  color: white;
  font-size: 1.2rem;
`;
