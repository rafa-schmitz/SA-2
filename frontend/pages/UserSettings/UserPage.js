import React, { useEffect, useState } from "react";
import { ScrollView, Text, Alert } from "react-native";
import api from "../../services/Api";
import Icon from "react-native-vector-icons/AntDesign";
import { useUserContext } from "../../context/context";

import {
  Container,
  RowPic,
  ProfileImage,
  FirstLetterName,
  RowName,
  UserName,
  TitleInventario,
  InputItem,
  UserInputs,
  RowButton,
  Update,
  TextButtom,
  ContainerSpells,
  ButtonsRow,
  MessageBox,
} from "./styles";

const UserPage = ({ navigation }) => {
  const { user, setUser } = useUserContext();
  const [USERNAME, setUsername] = useState();
  const [PASSWORD_U, setPw] = useState();
  const FirstLetter = user?.username.charAt(0);
  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });

  const deleteUserAlert = () =>
    Alert.alert("Deletar conta", "Você deseja deletar seu cadastro?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          navigation.navigate("SignUp");
          deleteUserAccount();
        },
      },
    ]);

  const deleteUserAccount = async () => {
    try {
      await api.delete(`/userDelete/${user.id}`, {
        IDUSER: user.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setUsername(user.username);
    setPw(user.password);
  }, []);

  const putUserDetails = async () => {
    try {
      await api.put(`/userUpdate/${user.id}`, {
        USERNAME,
        PASSWORD_U,
      });

      setUser({
        username: USERNAME,
        password: PASSWORD_U,
      });

      setStatus({
        type: "success",
        msg: "Dados alterados com sucesso!",
      });
    } catch ({ ...err }) {
      let errorMessage = err.response.data.error;
    }
  };

  return (
    <Container>
      <ScrollView>
        <ButtonsRow>
          <Icon
            name="arrowleft"
            size={30}
            color={"#2C877E"}
            onPress={() => navigation.navigate("Home")}
          ></Icon>

          <Icon
            name="delete"
            size={30}
            color={"#2C877E"}
            onPress={deleteUserAlert}
          ></Icon>
        </ButtonsRow>
        <RowPic>
          <ProfileImage>
            <FirstLetterName>{FirstLetter}</FirstLetterName>
          </ProfileImage>
        </RowPic>
        <RowName>
          <UserName>{USERNAME}</UserName>
        </RowName>

        <ContainerSpells>
          <TitleInventario>Altere suas informações</TitleInventario>
          <InputItem>
            <Text style={{ alignSelf: "center", color: "#5E5E5E" }}>
              Usuário:{" "}
            </Text>
            <UserInputs
              value={USERNAME}
              onChangeText={(e) => setUsername(e)}
            ></UserInputs>
          </InputItem>
          <InputItem>
            <Text style={{ alignSelf: "center", color: "#5E5E5E" }}>
              Senha:{" "}
            </Text>
            <UserInputs
              style={{ color: "#fff" }}
              secureTextEntry={true}
              value={PASSWORD_U}
              onChangeText={(e) => setPw(e)}
            ></UserInputs>
          </InputItem>
          <MessageBox
            style={{
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
              marginTop: "5%",
              color: "#B756C9",
              fontSize: 16,
            }}
          >
            {status.msg}
          </MessageBox>
          <RowButton>
            <Update onPress={putUserDetails}>
              <TextButtom>Salvar</TextButtom>
            </Update>
          </RowButton>
        </ContainerSpells>
      </ScrollView>
    </Container>
  );
};

export default UserPage;
