import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Formik } from "formik";

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

const Login = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar barStyle="dark" />
      <PageBackground source={require("../../assets/images/welcome.jpg")}>
        <InnerContainer>
          <PageTitle>D&D Sheets App</PageTitle>
          <Subtitle>Access your account</Subtitle>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormContainer>
                
                <TextInput
                  label="Email Address"
                  icon=""
                  placeholder="your-email@gmail.com"
                  placeholderTextColor="#000"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />

                <TextInput
                  label="Password"
                  icon=""
                  placeholder="* * * * * * * * * * * * * * *"
                  placeholderTextColor="#000"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                {/* <MessageBox>...</MessageBox> */}

                <Line />

                <SignUpButon onPress={handleSubmit}>
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

const TextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
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

export default Login;
