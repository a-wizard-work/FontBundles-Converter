import { FC } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";

import {
  Wrapper,
  FormWrapper,
  LogoWrapper,
  PasswordInput,
  FormTitle,
} from "./styles";
import Button from "components/Button";
import StyledImage from "components/StyledImage";
import { COOKIE_NAME, useSiteBasicAuth } from "contexts/SiteBasicAuth";

interface IFormData {
  password: string;
}

const PasswordProtection: FC = () => {
  const cookies = new Cookies();
  const { register, handleSubmit } = useForm();
  const { setAuthenticated } = useSiteBasicAuth();

  const onSubmit = (data: IFormData) => {
    if (data.password === process.env.REACT_APP_SITE_PASSWORD) {
      cookies.set(COOKIE_NAME, "ok");
      setAuthenticated(true);
    } else {
      alert("Password is Wrong");
    }
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <LogoWrapper>
          <StyledImage src="android-icon-192x192.png" alt="logo" />
        </LogoWrapper>
        <FormTitle>Site Protection</FormTitle>
        <PasswordInput
          type="password"
          name="password"
          ref={register}
          placeholder="Please Type your Password"
        />
        <Button size="medium" rounded>
          Take Me To the Site
        </Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default PasswordProtection;
