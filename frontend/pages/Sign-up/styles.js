import styled from "styled-components";
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";

export const StyledContainer = styled.View`
  flex: 1;
  background: #1a1a1a;
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const PageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: #5E5E5E;
  padding: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #5E5E5E;
  margin-bottom: 20px;
`;

export const StyledFormContainer = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput `
  background-color: #C5C5C5;
  padding: 15px 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 10px;
  color: #000;
`;

export const StyledInputLabel = styled.Text `
  color: #5E5E5E;
  font-size: 13px;
  text-align: left;
  margin-bottom: 10px;
`;

export const LeftIcon = styled.View `
  position: absolute;
  top: 50%;
  left: 5%;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity `
  position: absolute;
  top: 50%;
  right: 5%;
  z-index: 1;
`;

export const SignUpButon = styled.TouchableOpacity `
  padding: 15px;
  background-color: #2C877E;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 60px;
`;

export const ButtonText = styled.Text `
  color: #000;
  font-size: 16px;
`;

export const MessageBox = styled.Text `
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View `
  height: 1px;
  width: 100%;
  border: solid 1px #5E5E5E;
  margin: 20px auto;
`;

export const SignUpView = styled.View `
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
`;

export const SignUpText = styled.Text `
  justify-content: center;
  align-items: center;
  color: #5E5E5E;
  font-size: 15px;
`;

export const SignUpRedirect = styled.View `
  justify-content: center;
  align-items: center;
`;

export const SignUpLink = styled.Text `
  color: #2C877E;
  font-size: 15px;
  text-decoration: underline;
`;