import React, { useState } from "react";
import { View, StatusBar, Switch } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import { Formik } from "formik";
import api from "../../services/Api";

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

const SignUp = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [USERNAME, setUsername] = useState("");
  const [EMAIL, setEmail] = useState("");
  const [PASSWORD_U, setPassword] = useState("");
  const [TYPE_U, setUserType] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setUserType((previousState) => !previousState);
  };

  const handleSignUp = async () => {
    try {
      const signUp = await api.post("/signup", {
        USERNAME,
        EMAIL,
        PASSWORD_U,
        TYPE_U,
      });

      setStatus({
        type: "success",
        msg: "User created successfully!",
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
                  label="Enter your username"
                  icon="user"
                  placeholder="Leroy Jenkins"
                  placeholderTextColor="#000"
                  onChangeText={(e) => setUsername(e)}
                  onBlur={handleBlur("username")}
                  value={USERNAME}
                />

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

                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>

                <MessageBox>{status.msg}</MessageBox>

                <Line />

                <SignUpButon onPress={handleSignUp}>
                  <ButtonText>Sign up!</ButtonText>
                </SignUpButon>

                <SignUpView>
                  <SignUpText>Already have an account? </SignUpText>
                  <SignUpLink onPress={() => navigation.navigate("Login")}>
                    Login!
                  </SignUpLink>
                </SignUpView>
              </StyledFormContainer>
            )}
          </Formik>
        </InnerContainer>
      </PageBackground>
    </StyledContainer>
  );
};


// input modular
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

export default SignUp;
