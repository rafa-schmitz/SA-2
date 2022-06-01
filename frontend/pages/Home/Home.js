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

  useEffect(()=> {

  }, [])

  return (
    <StyledContainer>
      <StatusBar barStyle="dark" />
      {/* <PageBackground source={require("../../assets/images/welcome.jpg")}> */}
        <InnerContainer>
          <Subtitle>doidera</Subtitle>
        </InnerContainer>
      {/* </PageBackground> */}
    </StyledContainer>
  );
};


export default Home;
