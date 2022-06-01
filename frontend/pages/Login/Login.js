import React, { useState } from "react";
import { View, StatusBar, Keyboard } from "react-native";
import { Formik } from "formik";
import api from "../../services/Api";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import { useCabecaMole } from "../../context/context";

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
  SignUpButon,
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
  const { user, setUser } = useCabecaMole();
  const [hidePassword, setHidePassword] = useState(true);
  const [EMAIL, setEmail] = useState("");
  const [PASSWORD_U, setPassword] = useState("");
  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });

  const handleLogin = async () => {
    try {
      const signIn = await api.post("/login", {
        EMAIL,
        PASSWORD_U,
      });

      setStatus({
        type: "success",
        msg: "Success! Redirecting you to Home...",
      });

      setUser({
        id: signIn.data.dados.IDUSER,
        username: signIn.data.dados.USERNAME,
        email: signIn.data.dados.EMAIL,
        user_type: signIn.data.dados.TYPE_U,
      });

      Keyboard.dismiss();
      return setTimeout(() => navigation.navigate("Home"), 2000);
    } catch ({ ...err }) {
      setStatus({
        type: "error",
        msg: "Login failed! Please try again",
      });
    }
  };

  return (
    <StyledContainer>
      <StatusBar barStyle="dark" />
      <PageBackground source={require("../../assets/images/welcome.jpg")}>
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
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormContainer>
                <TextInput
                  label="Email Address"
                  icon="envelope"
                  placeholder="your-email@gmail.com"
                  placeholderTextColor="#000"
                  onChangeText={(e) => setEmail(e)}
                  onBlur={handleBlur("email")}
                  value={EMAIL}
                  keyboardType="email-address"
                />

                <TextInput
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * * * * * * * * * *"
                  placeholderTextColor="#000"
                  onChangeText={(e) => setPassword(e)}
                  onBlur={handleBlur("password")}
                  value={PASSWORD_U}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <MessageBox>{status.msg}</MessageBox>

                <Line />

                <SignUpButon onPress={handleLogin}>
                  <ButtonText>Login</ButtonText>
                </SignUpButon>

                <SignUpView>
                  <SignUpText>Don't have an account? </SignUpText>

                  <SignUpRedirect onPress={() => navigation.navigate("SignUp")}>
                    <SignUpLink>Sign up!</SignUpLink>
                  </SignUpRedirect>
                </SignUpView>
              </StyledFormContainer>
            )}
          </Formik>
        </InnerContainer>
      </PageBackground>
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
