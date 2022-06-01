import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { useUserContext } from "../../context/context";

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  PageBackground,
  Subtitle,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
} from "./styles";

const Home = () => {
  const { user } = useUserContext();

  useEffect(()=> {
    console.log(user);
  }, [])

  return (
    <StyledContainer>
      <StatusBar barStyle="dark" />
        <InnerContainer>
          <PageTitle>Olá, {user.username}!</PageTitle>
          <Subtitle>doidera</Subtitle>
        </InnerContainer>
    </StyledContainer>
  );
};

export default Home;
