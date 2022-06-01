import React, { useState, useEffect } from "react";
import { View, StatusBar, Keyboard } from "react-native";
import { Formik } from "formik";
import api from "../../services/Api";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import { useUserContext } from "../../context/context";

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  PageBackground,
  Subtitle,
  StyledFormContainer,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  LoginButon,
  ButtonText,
  RightIcon,
  MessageBox,
  Line,
  SignUpView,
  SignUpText,
  SignUpRedirect,
  SignUpLink,
} from "./styles";

const Login = ({ navigation }) => {
  const { user, setUser } = useUserContext();
  const [hidePassword, setHidePassword] = useState(true);
  const [USERNAME, setUsername] = useState("");
  const [PASSWORD_U, setPassword] = useState("");
  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });

  useEffect(() => {
    setStatus({
      type: "clear",
      msg: "",
    });
  }, []);

  const handleLogin = async () => {
    try {
      const signIn = await api.post("/login", {
        USERNAME,
        PASSWORD_U,
      });

      setStatus({
        type: "success",
        msg: "Success! Redirecting you to Home...",
      });

      setUsername("");
      setPassword("");

      setUser({
        id: signIn.data.dados[0].IDUSER,
        username: signIn.data.dados[0].USERNAME,
        email: signIn.data.dados[0].EMAIL,
        user_type: signIn.data.dados[0].TYPE_U,
      });

      console.log(user.username);
      
      Keyboard.dismiss();
      return setTimeout(() => navigation.navigate("Home"), 2000);
    } catch ({ ...err }) {
      if (USERNAME === '' || EMAIL === '' || PASSWORD_U === '') {
        setStatus({
          type: "error",
          msg: "Você precisa preencher todos os campos!",
        });
      } else {
        setStatus({
          type: "error",
          msg: "Erro! Usuário ou e-mail já cadastrados",
        });
      }
    }
  };

  return (
    <StyledContainer>
      <StatusBar barStyle="dark" />
        <InnerContainer>
          <PageTitle>D&D Sheets App</PageTitle>
          <Subtitle>Access your account</Subtitle>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleBlur }) => (
              <StyledFormContainer>
                <TextInput
                  label="Usuário"
                  icon="envelope"
                  placeholder="your-email@gmail.com"
                  placeholderTextColor="#5E5E5E"
                  onChangeText={(e) => setUsername(e)}
                  onBlur={handleBlur("email")}
                  value={USERNAME}
                  keyboardType="email-address"
                />

                <TextInput
                  label="Senha"
                  icon="lock"
                  placeholder="* * * * * * * *"
                  placeholderTextColor="#5E5E5E"
                  onChangeText={(e) => setPassword(e)}
                  onBlur={handleBlur("password")}
                  value={PASSWORD_U}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <MessageBox
                  style={{
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: "5%",
                    color: "#B756C9",
                    fontSize: 16,
                  }}
                >
                  {status.msg}
                  </MessageBox>

                <Line />

                <LoginButon onPress={handleLogin}>
                  <ButtonText>Login</ButtonText>
                </LoginButon>

                <SignUpView>
                  <SignUpText>Ainda não tem uma conta? </SignUpText>

                  <SignUpRedirect onPress={() => navigation.navigate("SignUp")}>
                    <SignUpLink>Cadastre-se!</SignUpLink>
                  </SignUpRedirect>
                </SignUpView>
              </StyledFormContainer>
            )}
          </Formik>
        </InnerContainer>
    </StyledContainer>
  );
};

const TextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
      <Icon2 name={icon} size={20} color={"#000"} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />

      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Icon
            name={hidePassword ? "eye-slash" : "eye"}
            size={20}
            color="#000"
          ></Icon>
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
