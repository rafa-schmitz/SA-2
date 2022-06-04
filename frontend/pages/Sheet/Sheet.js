import React, { useEffect, useState } from "react";
import { ScrollView, FlatList } from "react-native";
import api from "../../services/Api";
import Icon from "react-native-vector-icons/AntDesign";

import {
  Container,
  RowPic,
  ProfileImage,
  FirstLetterName,
  RowName,
  UserName,
  CharName,
  Level,
  ContainerStats,
  TitleStats,
  StatsTitle,
  TitleInventario,
  TitleItem,
  InputItem,
  InputTeste,
  Line,
  RowButton,
  Update,
  TextButtom,
  InputStats,
  StatsCont,
  ContainerSpells,
  ReturnButton
} from "./styles";

const Sheet = ({ route, navigation }) => {
  const itemId = route?.params;
  const [sheet, setSheet] = useState();
  const [user, setUser] = useState();
  const FirstLetter = user?.USERNAME.charAt(0);

  const [CHARACTERNAME, SETCHARACTERNAME] = useState()
  const [SPELLNAME, SETSPELLNAME] = useState();
  const [SPELLDESCRIPTION, SETSPELLDESCRIPTION] = useState();
  const [ITEM, setITEM] = useState();
  const [ITEMDESCRIPTION, setITEMDESCRIPTION] = useState();
  const [ARMORCLASS, SETARMORCLASS] = useState();
  const [CHA, SETCHA] = useState();
  const [CLASS, SETCLASS] = useState();
  const [DEX, SETDEX] = useState();
  const [ENDU, SETENDU] = useState();
  const [EXP, SETEXP] = useState();
  const [INTE, SETINTE] = useState();
  const [LEVEL_C, SETLEVEL_C] = useState();
  const [MOVESPEED, SETMOVESPEED] = useState();
  const [RACE, SETRACE] = useState();
  const [STR, SETSTR] = useState();
  const [WIS, SETWIS] = useState();

  const getUser = async () => {
    await api.get(`/user`).then((res) => {
      const api = res.data?.dados?.map( users => {
        if( users.IDUSER == itemId?.userId ){ 
          return users 
        }});
      const apiFiltered = api?.filter(arrayUsers => {
        return arrayUsers != undefined
      })
        setUser(apiFiltered[0]);
    });
  };

  useEffect(()=>{
    getUser()
  },[itemId])

  const getSheet = async () => {
    await api.get(`/Sheet/${user?.IDUSER}`).then((res) => {
      const api = res.data;
      setSheet(api);
    });
  };

  useEffect(() => {
    getSheet();
  }, [user]);

  const charName = sheet?.sheetB?.map((items) => {
    return items?.CHARACTERNAME;
  });
  const charLvl = sheet?.sheetB?.map((items) => {
    return items?.LEVEL_C;
  });

  const putSpell = async () => {
    await api.put(`/Spell/${user?.IDUSER}`, {
      SPELLDESCRIPTION,
      SPELLNAME,
    });
  };

  const putItem = async () => {
    await api.put(`/Inventory/${user?.IDUSER}`, {
      ITEM,
      ITEMDESCRIPTION,
    });
  };

  const upSheet = async () => {
    await api.put(`/Sheet/${user?.IDUSER}`, {
      CHARACTERNAME,
      ARMORCLASS,
      CHA,
      CLASS,
      DEX,
      ENDU,
      EXP,
      INTE,
      LEVEL_C,
      MOVESPEED,
      RACE,
      STR,
      WIS
    });
  };


  useEffect(() => {
    SETCHARACTERNAME(sheet?.spellC[0]?.CHARACTERNAME)
    SETSPELLNAME(sheet?.spellC[0]?.SPELLNAME)
    SETSPELLDESCRIPTION(sheet?.spellC[0]?.SPELLDESCRIPTION)
    setITEM(sheet?.inv[0]?.ITEM)
    setITEMDESCRIPTION(sheet?.inv[0]?.ITEMDESCRIPTION)
    SETARMORCLASS(sheet?.sheetB[0]?.ARMORCLASS);
    SETCHA(sheet?.sheetB[0]?.CHA);
    SETCLASS(sheet?.sheetB[0]?.CLASS);
    SETDEX(sheet?.sheetB[0]?.DEX);
    SETENDU(sheet?.sheetB[0]?.ENDU);
    SETEXP(sheet?.sheetB[0]?.EXP);
    SETINTE(sheet?.sheetB[0]?.INTE);
    SETLEVEL_C(sheet?.sheetB[0]?.LEVEL_C);
    SETMOVESPEED(sheet?.sheetB[0]?.MOVESPEED);
    SETRACE(sheet?.sheetB[0]?.RACE);
    SETSTR(sheet?.sheetB[0]?.STR);
    SETWIS(sheet?.sheetB[0]?.WIS);
  }, [sheet]);

  return (
    <>
      <Container>
        <ScrollView>
          <RowPic>
        <ReturnButton >
          <Icon name="arrowleft" size={30} onPress={() => navigation.navigate("Game")}></Icon>
        </ReturnButton> 
            <ProfileImage>
              <FirstLetterName>{FirstLetter}</FirstLetterName>
            </ProfileImage>
          </RowPic>
          <RowName>
            <UserName>{user?.USERNAME}</UserName>
            <CharName>{charName?.[0]}</CharName>
            <Level>Lvl: {charLvl?.[0]}</Level>
          </RowName>
          <ContainerStats>
            <TitleStats>Status</TitleStats>
            <StatsCont>
              <StatsTitle>Nome:</StatsTitle>
              <InputStats
                value={CHARACTERNAME?.toString()}
                onChangeText={(e) => SETCHARACTERNAME(e)}
              ></InputStats>
            </StatsCont>
            <StatsCont>
              <StatsTitle>Level:</StatsTitle>
              <InputStats
                keyboardType="numeric"
                value={LEVEL_C?.toString()}
                onChangeText={(e) => SETLEVEL_C(e)}
              ></InputStats>
            </StatsCont>
            <StatsCont>
              <StatsTitle>Exp:</StatsTitle>
              <InputStats
                keyboardType="numeric"
                value={EXP?.toString()}
                onChangeText={(e) => SETEXP(e)}
              ></InputStats>
            </StatsCont>
            <StatsCont>
              <StatsTitle>Raça:</StatsTitle>
              <InputStats
                keyboardType="numeric"
                value={RACE?.toString()}
                onChangeText={(e) => SETRACE(e)}
              ></InputStats>
            </StatsCont>
            <StatsCont>
              <StatsTitle>Armadura: </StatsTitle>
              <InputStats
                keyboardType="numeric"
                value={ARMORCLASS?.toString()}
                onChangeText={(e) => SETARMORCLASS(e)}
              ></InputStats>
            </StatsCont>
            <StatsCont>
              <StatsTitle>Carisma: </StatsTitle>
              <InputStats
                keyboardType="numeric"
                value={CHA?.toString()}
                onChangeText={(e) => SETCHA(e)}
              ></InputStats>
            </StatsCont>
            <StatsCont>
              <StatsTitle>Classe:</StatsTitle>
              <InputStats
                value={CLASS?.toString()}
                onChangeText={(e) => SETCLASS(e)}
              ></InputStats>
            </StatsCont>
            <StatsCont>
              <StatsTitle>Dex:</StatsTitle>
              <InputStats
                keyboardType="numeric"
                value={DEX?.toString()}
                onChangeText={(e) => SETDEX(e)}
              ></InputStats>
            </StatsCont>
            <StatsCont>
              <StatsTitle>End:</StatsTitle>
              <InputStats
                keyboardType="numeric"
                value={ENDU?.toString()}
                onChangeText={(e) => SETENDU(e)}
              ></InputStats>
            </StatsCont>
            <StatsCont>
              <StatsTitle>Int:</StatsTitle>
              <InputStats
                keyboardType="numeric"
                value={INTE?.toString()}
                onChangeText={(e) => SETINTE(e)}
              ></InputStats>
            </StatsCont>
            <StatsCont>
              <StatsTitle>Move Speed:</StatsTitle>
              <InputStats
                keyboardType="numeric"
                value={MOVESPEED?.toString()}
                onChangeText={(e) => SETMOVESPEED(e)}
              ></InputStats>
            </StatsCont>
            <StatsCont>
              <StatsTitle>Str:</StatsTitle>
              <InputStats
                keyboardType="numeric"
                value={STR?.toString()}
                onChangeText={(e) => SETSTR(e)}
              ></InputStats>
            </StatsCont>
            <StatsCont>
              <StatsTitle>Wis:</StatsTitle>
              <InputStats
                keyboardType="numeric"
                value={WIS?.toString()}
                onChangeText={(e) => SETWIS(e)}
              ></InputStats>
            </StatsCont>
            <RowButton>
              <Update>
                <TextButtom onPress={upSheet}>Salvar</TextButtom>
              </Update>
            </RowButton>
          </ContainerStats>
          <ContainerStats>
            <TitleInventario>Inventário</TitleInventario>
            <InputItem>
              <InputTeste
                value={ITEM}
                onChangeText={(e) => setITEM(e)}
              ></InputTeste>
              <InputTeste
                value={ITEMDESCRIPTION}
                onChangeText={(e) => setITEMDESCRIPTION(e)}
              ></InputTeste>
            </InputItem>
            <RowButton>
              <Update>
                <TextButtom onPress={putItem}>Salvar</TextButtom>
              </Update>
            </RowButton>
          </ContainerStats>
          <ContainerSpells>
            <TitleInventario>Spells</TitleInventario>
            <InputItem>
              <InputTeste
                value={SPELLNAME?.toString()}
                onChangeText={(e) => SETSPELLNAME(e)}
              ></InputTeste>
              <InputTeste
                value={SPELLDESCRIPTION?.toString()}
                onChangeText={(e) => SETSPELLDESCRIPTION(e)}
              ></InputTeste>
            </InputItem>
            <RowButton>
              <Update onPress={putSpell}>
                <TextButtom>Salvar</TextButtom>
              </Update>
            </RowButton>
          </ContainerSpells>
        </ScrollView>
      </Container>
    </>
  );
};

export default Sheet;