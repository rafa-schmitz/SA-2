import styled from "styled-components";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-content: center;
  background-color: #1a1a1a;
`;

export const RowPic = styled.View`
  justify-content: flex-end;
  height: 160px;
  background-color: #333333;
`;

export const ProfileImage = styled.View`
  width: 130px;
  height: 130px;
  background-color: #2c877e;
  border-radius: 70px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const ButtonsRow = styled.View `
  padding: 10px 10px 0 10px;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  background-color: #333333;
`;

export const FirstLetterName = styled.Text`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const RowName = styled.View`
  height: 100px;
  background-color: #333333;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 22px;
  text-align: center;
  margin-top: 10px;
`;

export const CharName = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
`;

export const Level = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
`;

export const ContainerStats = styled.View`
  height: auto;
  margin-top: 30px;
  background-color: #333333;
`;

export const ContainerSpells = styled.View`
  justify-content: center;
  align-content: center;
  height: auto;
  margin-top: 30px;
  background-color: #333333;
  margin-bottom: 30px;
  color: #fff;
`;

export const TitleStats = styled.Text`
  color: #fff;
  font-size: 22px;
  text-align: center;
  margin-top: 10px;
  font-weight: 600;
`;

export const TitleInventario = styled.Text`
  color:#fff;
  font-size: 22px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const StatsTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  align-self: center;
`;

export const TitleItem = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 25px;
  margin-top: 25px;
`;

export const DescriptionItem = styled.Text`
  color: #fff;
  opacity: 0.5;
  font-size: 14px;
  margin-left: 25px;
  margin-top: 2px;
`;

export const InputItem = styled.View`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-left: 18px;
  margin-top: 15px;
`;

export const UserInputs = styled.TextInput`
  width: 150px;
  height: 39px;
  border-bottom-width: 1px;
  border-bottom-color: #1a1a1a;
  background-color: transparent;
  color: #fff;
  text-decoration: none;
`;

export const Line = styled.View`
  margin-left: 18px;
  margin-top: 7px;
  width: 150px;
  height: 1px;
  background-color: #1a1a1a;
`;

export const RowButton = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Update = styled.TouchableOpacity`
  border-radius: 60px;
  background-color: #2c877e;
  width: 90px;
  height: 40px;
  margin-left: 25px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const TextButtom = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

export const StatsCont = styled.View`
  flex-direction: row;
  margin-left: 25px;
  margin-top: 4px;
`;
export const InputStats = styled.TextInput`
  width: auto;
  height: auto;
  color: #fff;
  margin-top: 2px;
`;

export const ReturnButton = styled.TouchableOpacity`
  width: 40px;
  height: 25px;
  margin-left: 3px;
`;

export const MessageBox = styled.Text `
  text-align: center;
  font-size: 13px;
`;