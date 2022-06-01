import styled from "styled-components";
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";

export const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
  background-color: #000000;
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
  color: #fff;
  padding: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
`;

export const StyledFormContainer = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput `
  background-color: white;
  padding: 15px 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 10px;
  color: #000;
`;

export const StyledInputLabel = styled.Text `
  color: white;
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View `
  position: absolute;
  top: 38px;
  left: 15px;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity `
  position: absolute;
  top: 38px;
  right: 15px;
  z-index: 1;
`;

export const SignUpButon = styled.TouchableOpacity `
  padding: 15px;
  background-color: white;
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
  background-color: white;
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
  color: white;
  font-size: 15px;
`;

export const SignUpRedirect = styled.TouchableOpacity `
  justify-content: center;
  align-items: center;
`;

export const SignUpLink = styled.Text `
  color: blueviolet;
  font-size: 15px;
  text-decoration: underline;
`;