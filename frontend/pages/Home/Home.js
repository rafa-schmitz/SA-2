import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "react-native";
import { useUserContext } from "../../context/context";

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  TitleContainer,
  Username,
  Line,
  MainText,
  SheetButton,
  SheetButtonText,
  GameButton,
  GameButtonText,
  UserButton
} from "./styles";

const Home = ({ navigation }) => {
  const { user } = useUserContext();
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(user.username)
  }, [user]);

  return (
    <StyledContainer>
      <StatusBar barStyle="dark" />
        <InnerContainer>
          <TitleContainer>
            <PageTitle>Olá, <Username>{username}</Username>!</PageTitle>
            <UserButton>
              <Icon onPress={() => navigation.navigate("UserPage")} style={{alignSelf: "center"}} name={"user"} size={30} color="#2C877E" />
            </UserButton>
          </TitleContainer>
          <Line />

          <MainText>O que você deseja fazer?</MainText>

          <SheetButton onPress={() => navigation.navigate("Sheet")}>
            <SheetButtonText>Acessar minha ficha!</SheetButtonText>
          </SheetButton>

          <GameButton onPress={() => navigation.navigate("Game")}>
            <GameButtonText>Ir para área de jogos!</GameButtonText>
          </GameButton>
        </InnerContainer>
    </StyledContainer>
  );
};

export default Home;
