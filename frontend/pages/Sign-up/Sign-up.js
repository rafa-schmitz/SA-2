import React, { useEffect, useState } from "react";
import { View, StatusBar, Switch, Keyboard, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import { Formik } from "formik";
import api from "../../services/Api";

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
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

  useEffect(() => {
    setStatus({
      type: "clear",
      msg: "",
    });

  }, []);

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
      const sheetP = await api.post('/Sheet/',{
        CHARACTERNAME:"-",
        ARMORCLASS:10,
        CHA:10,
        CLASS:"-",
        DEX:10,
        ENDU:10,
        EXP:0,
        INTE:10,
        LEVEL_C:1,
        MOVESPEED:9,
        RACE:"-",
        STR:10,
        WIS:10
      });
      

      const inventoryP = await api.post('/Inventory/',{
        ITEM:"-",
        ITEMDESCRIPTION:"-",
      });

      const spellP = await api.post('/Spell/',{
        SPELLNAME:"-",
        SPELLDESCRIPTION:"-",
      })

      setStatus({
        type: "success",
        msg: "Usuário criado com sucesso!\nRedirecionando você para o login...",
      });

      setUsername("");
      setEmail("");
      setPassword("");
      setUserType("");

      Keyboard.dismiss();
      setLoading(false);
      return setTimeout(() => navigation.navigate("Login"), 3000);
    } catch (err) {
      let emptyInputsError = err?.response?.data?.err?.message;
      let userOrEmailError =  err?.response?.data?.message;

      if (emptyInputsError) {
        setStatus({
          type: "error",
          msg: emptyInputsError,
        });
      } else {
        setStatus({
          type: "error",
          msg: userOrEmailError,
        });
      }
    }
  };

  return (
    <StyledContainer>
      <StatusBar barStyle="dark" />
      <InnerContainer>
        <PageTitle>D&D Companion</PageTitle>
        <Subtitle>Create your account</Subtitle>

        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            userType: "",
          }}>
          {({ handleBlur }) => (
            <StyledFormContainer>
              <TextInput
                label="Escolha seu usuário"
                icon="user"
                placeholder="Leroy Jenkins"
                placeholderTextColor="#5E5E5E"
                onChangeText={(e) => setUsername(e)}
                onBlur={handleBlur("username")}
                value={USERNAME}
              />

              <TextInput
                label="Preencha com o seu e-mail"
                icon="envelope"
                placeholder="your-email@gmail.com"
                placeholderTextColor="#5E5E5E"
                onChangeText={(e) => setEmail(e)}
                onBlur={handleBlur("email")}
                value={EMAIL}
                keyboardType="email-address"
              />

              <TextInput
                label="Crie uma senha"
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

              <View
                style={{
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: "5%",
                }}
              >
                <Text
                  style={{
                    color: "#5E5E5E",
                    fontSize: 20,
                  }}
                >
                  Player!
                </Text>
                <Switch
                  trackColor={{ false: "#2C877E", true: "#B756C9" }}
                  thumbColor={isEnabled ? "#B756C9" : "#2C877E"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />

                <Text
                  style={{
                    color: "#5E5E5E",
                    fontSize: 20,
                  }}
                >
                  Master!
                </Text>
              </View>

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

              <SignUpButon onPress={handleSignUp}>
                <ButtonText>Cadastrar</ButtonText>
              </SignUpButon>

              <SignUpView>
                <SignUpText>Já tem uma conta? </SignUpText>
                <SignUpLink onPress={() => navigation.navigate("Login")}>
                  Login!
                </SignUpLink>
              </SignUpView>
            </StyledFormContainer>
          )}
        </Formik>
      </InnerContainer>
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
