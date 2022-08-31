import * as Styled from "./style"
import logo from "../../assets/logo_patterns/logo.png"
import toast from "react-hot-toast";
import Button from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { StyledInput } from "../../components/Input/styles";
import { useAuth } from "../../contexts/auth";
import { api } from "../../services";
import { MessageError } from "../../assets/styles/globalStyles";
import * as yup from "yup";
import { LoginData } from "../../interfaces";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email required"),

  password: yup
    .string()
    .min(8, "Your password is too weak")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Example: @Abc1234"
    )
    .required("Required"),
});

const Login = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    api
      .post("/auth/login", data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch(() => {
        toast.error("User or password invalid");
      });
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer onSubmit={handleSubmit(handleLogin)}>
        <Styled.LoginLogoContainer>
          <h1>Project Burger</h1>
          <img alt="logo" src={logo} />
        </Styled.LoginLogoContainer>
        <StyledInput placeholder="Email" {...register("email")} />
        <StyledInput
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <MessageError>
          {errors.email?.message || errors.password?.message}
        </MessageError>
        <Button text="Submit" size="large" type="submit" />
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
