import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Formik } from "formik";
import api from "../../services/api";

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

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(null);
  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });

  const handleSignUp = async () => {
    try {
      setLoading(true);

      const signUp = await api.post("/user", {
        hidePassword,
        username,
        email,
        password,
        userType,
      });

      setStatus({
        type: "success",
        msg: "User created successfully!"
      });

      Keyboard.dismiss();
      setLoading(false);
      // return setTimeout(() => navigation.navigate("Login"), 3000)

    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <StyledContainer>
      <StatusBar barStyle="dark" />
      <PageBackground source={require("../../assets/images/welcome.jpg")}>
        <InnerContainer>
          <PageTitle>D&D Sheets App</PageTitle>
          <Subtitle>Create your account</Subtitle>

          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              userType: "",
            }}
            onSubmit={(values) => {
              console.log(values);

              setUsername("");
              setEmail("");
              setPassword("");
              setUserType("");
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormContainer>
                <TextInput
                  label="Enter your name"
                  icon=""
                  placeholder="Leroy Jenkins"
                  placeholderTextColor="#000"
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={(values.username, username)}
                />

                <TextInput
                  label="Email Address"
                  icon=""
                  placeholder="your-email@gmail.com"
                  placeholderTextColor="#000"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={(values.email, email)}
                  keyboardType="email-address"
                />

                <TextInput
                  label="Password"
                  icon=""
                  placeholder="* * * * * * * * * * * * * * *"
                  placeholderTextColor="#000"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={(values.password, password)}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <TextInput
                  label="Are you a Master or a Player"
                  icon=""
                  placeholder="* * * * * * * * * * * * * * *"
                  placeholderTextColor="#000"
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={(values.userType, userType)}
                />

                <MessageBox>
                  {status.msg}
                </MessageBox>

                <Line />

                <SignUpButon onPress={handleSignUp}>
                  <ButtonText>Sign up!</ButtonText>
                </SignUpButon>

                <SignUpView>
                  <SignUpText>Already have an account? </SignUpText>
                  <SignUpLink>Login!</SignUpLink>
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
      <LeftIcon></LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />

      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Icon
            name={hidePassword ? "ios-eye-outline" : "ios-eye-off-outline"}
            size={20}
            color="#000"
          ></Icon>
        </RightIcon>
      )}
    </View>
  );
};

export default SignUp;
