import React, { useEffect, useState } from "react";
import { FlatList, View, TextInput, ScrollView, TouchableOpacity, Text } from "react-native";
import api from "../../services/Api";
import { useUserContext } from "../../context/context";
import Icon from "react-native-vector-icons/AntDesign";
import KeyboardAvoidingInput from '../../components/KeyboardAvoidingInput'

import {
  Container,
  SheetTitle,
  CardsContainer,
  Cards,
  NameSheet,
  Historic,
  Notifications,
  Chat,
  Message,
  ContainerChat,
  Spacer,
  InputMessage,
  ContainerRoll,
  DiceSix,
  RollSix,
  Result,
  RollTwenty,
  TextD20,
  TextD6
} from "./styles";

const Game = ({ navigation }) => {
  const { user } = useUserContext();

  const [users, setusers] = useState(undefined);
  const [diceSix, setDiceSix] = useState(0)
  const [diceTwenty, setDiceTwenty] = useState(0)

  const getusers = async () => {
    await api.get(`/user`).then((res) => {
      const api = res.data;
      setusers(api);
    });
  };

  useEffect(() => {
    getusers();
  }, [!users]);

  const AllIds = users?.dados.map( contas =>{ return contas.IDUSER })

  const dispCard = () =>{
    if( user?.user_type === true ){
      return (
        <CardsContainer>
        <FlatList
          horizontal={true}
          data={users?.dados}
          keyExtractor={(item) => item.IDUSER}
          renderItem={({ item }) => (
            <>
            <Cards>
              <NameSheet  onPress={() => navigation.navigate('Sheet', { userId: item.IDUSER })}>
                Ficha de {item?.USERNAME}
              </NameSheet>
            </Cards>
            </>
          )}
        />
        </CardsContainer>
      )
    } else {
        
      if( AllIds?.map( ids =>{ return ids == user?.id }) ){
        return (
          <Cards>
          <NameSheet  onPress={() => navigation.navigate("Sheet", { userId: user?.id})}>
            Ficha de {user?.username}
          </NameSheet>
        </Cards>
        )
      } else{
        return null
      }
    }
  }

  const randomizeNumberD6 = () => {
    const D6 = Math.floor(Math.random() * 6) + 1;
    setDiceSix(D6)
  }

  const randomizeNumberD20 = () =>{
    const D20 = Math.floor(Math.random() * 20) + 1;
    setDiceTwenty(D20)
  }

  return (
    <Container>
      <SheetTitle>Fichas</SheetTitle>
      { dispCard() }
      <ContainerChat>
      <Historic>
        <Notifications>Jogador x tirou 5 no dado</Notifications>
        <Notifications>Jogador x tirou 1 no dado</Notifications>
        <Notifications>Jogador x tirou 3 no dado</Notifications>
        <Spacer></Spacer>
      </Historic>
      <InputMessage></InputMessage>
      </ContainerChat>
      <ContainerRoll>
        <RollSix>
      <Result>{diceSix}</Result>
      <DiceSix onPress={randomizeNumberD6}>
      <TextD6>D6</TextD6>
      </DiceSix>
      </RollSix>
      <RollTwenty>
      <Result>{diceTwenty}</Result>
      <DiceSix onPress={randomizeNumberD20}>
        <TextD20>D20</TextD20>
      </DiceSix>
      </RollTwenty>
      </ContainerRoll>
    </Container>
  );
};

export default Game;
