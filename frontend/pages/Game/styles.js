import styled from "styled-components";
import { View, Text,TextInput, TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-content: center;
  background-color: #1a1a1a;
`;

export const CardsContainer= styled.View`
flex-direction: row;
flex-wrap: wrap;
height: 100px;
align-items: center;
justify-content: center;
margin-left: 9px;
`

export const Cards = styled.View`
  background-color: #333333;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  justify-content: center;
  margin: 10px;
  align-self: center;
`
export const NameSheet = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: 700;
`

export const EditSheet = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  margin-right: 20px;
`

export const SheetTitle = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  margin-top: 15px;
`

export const ContainerChat = styled.View`
  align-items: center;
`

export const Historic = styled.View`
  min-height: 57%;
  height: auto;
  width: 90%;
  background-color: #333333;
  justify-content: flex-end;
  border-radius: 10px;
`

export const Notifications = styled.Text`
  color: #808080;
  font-size: 14px;
  margin-left: 18px;
  margin-top: 15px;
`
export const Spacer = styled.View`
  height: 20px;
`

export const Chat = styled.View`
background-color: #121212;
justify-content: flex-end;
`

export const Message = styled.Text`
  color: #808080;
  font-size: 14px;
  margin-left: 18px;
  margin-top: 5px;
`

export const InfoSheet = styled.Text`
 color: #fff;
 margin-top: 20px;
 margin-left: 20px;
`

export const TitleSheet = styled.Text`
 color: #fff;
 margin-top: 20px;
 text-align: center;
 font-weight: 700;
 font-size: 20px;
`

export const TitleInventory = styled.Text`
 color: #fff;
 margin-top: 20px;
 text-align: center;
 font-weight: 700;
 font-size: 20px;
`

export const TextD6 = styled.Text`
 color: #fff;
 text-align: center;
 font-size: 18px;
 font-weight: 600;
`

export const TextD20 = styled.Text`
 color: #fff;
 text-align: center;
 font-size: 18px;
 font-weight: 600;
`

export const Result = styled.Text`
 color: #fff;
 text-align: center;
 font-size: 20px;
`

export const InputMessage = styled.TextInput`
  width: 89%;
  height: 40px;
  border: 1px solid #808080;
  color: #fff;
  border-radius: 8px;
  margin-top: 5px;
`
export const ContainerRoll = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
`

export const RollSix = styled.View`
  height: 40px;
  margin: 10px;
`

export const RollTwenty = styled.View`
  height: 40px;
  margin: 10px;
`

export const DiceSix = styled.TouchableOpacity`
  border-radius: 60px;
  background-color: #2C877E;
  width: 90px;
  height: 40px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;