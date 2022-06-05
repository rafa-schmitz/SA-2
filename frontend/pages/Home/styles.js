import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";

// #1a1a1a- plano de fundo
// #333333 - divisorias
// #5E5E5E - strings
// #2C877E - botões
// #B756C9 - bonus

export const StyledContainer = styled.View `
  flex: 1;
  justify-content: center;
  align-content: center;
  background-color: #1a1a1a;
`;

export const InnerContainer = styled.View `
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 10px;
`;

export const TitleContainer = styled.View `
  padding: 20px;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const PageTitle = styled.Text `
  font-size: 30px;
  text-align: center;
  font-weight: 300;
  color: #5e5e5e;
`;

export const Username = styled.Text `
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: #2C877E;
`;

export const Subtitle = styled.Text `
  font-size: 18px;
  font-weight: bold;
  color: #5e5e5e;
  margin-bottom: 20px;
`;

export const Line = styled.View `
  height: 1px;
  width: 90%;
  border: solid 1px #5E5E5E;
  margin: 10px auto;
`;

export const MainText = styled.Text `
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  color: #5E5E5E;
  font-size: 22px;
`;

export const SheetButton = styled.TouchableOpacity `
  margin-top: 50px;
  padding: 15px;
  background-color: #2C877E;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 60px;
`;

export const SheetButtonText = styled.Text `
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

export const GameButton = styled.TouchableOpacity `
  margin-top: 50px;
  padding: 15px;
  background-color: #2C877E;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 60px;
`;

export const GameButtonText = styled.Text `
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

export const UserButton = styled.TouchableOpacity `
  padding-right: 15px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: auto;
`;