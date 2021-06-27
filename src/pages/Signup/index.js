import { useDispatch, useSelector } from "react-redux"
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkTo } from "../../components/LinkTo";
import { FormGroup, PageWrapper } from "../../globalStyles";
import { LogoWrapper, TopLink } from "../Signin/styles";

export const Signup = () => {
 
return (
<PageWrapper>
<TopLink>
        <LinkTo text="Sign up" url="/signup" />
      </TopLink>
      <LogoWrapper>
      <img src="./assets/logo-color.png" alt="logo" />
      </LogoWrapper>

      <form>
          <FormGroup>
              <Input
              name="nombre"
              label="Ingresa tu nombre"
              type="text"
              placeholder="Enter your name"
              
              />

          </FormGroup>
          <FormGroup>
              <Input
              name="email"
              label="Email Adress"
              type="email"
              placeholder="Enter your email"
              
              />

          </FormGroup>
          <FormGroup>
              <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your Password"
              
              />
              <Button
                type="submit"
                
              />

          </FormGroup>
      </form>
</PageWrapper>
);
}