import React, { useState, useRef } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { LogoSvg } from "../../../components";

// styles
import {
  Container,
  Input,
  Label,
  InputContent,
  ButtonLogin,
  ButtonLoginText,
} from "./styles";
import { colors } from '../../../constants/colors'
import { AuthenticationRequest } from "../../../store/modules/auth/actions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  function handleSignIn() {
    dispatch(AuthenticationRequest(email, password));
  }

  return (
    <Container>
      <LogoSvg />
      <InputContent>
        <Label>E-mail</Label>
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={(value) => setEmail(value)}
          onSubmitEditing={() => passwordRef.current.focus()}
          autoCapitalize="none"
          returnKeyLabel="next"
          returnKeyType="next"
          keyboardType="email-address"
        />
        <Label>Senha</Label>
        <Input
          ref={passwordRef}
          placeholder="Senha"
          value={password}
          onChangeText={(value) => setPassword(value)}
          onSubmitEditing={handleSignIn}
          secureTextEntry
          returnKeyLabel="go"
          returnKeyType="go"
        />
      </InputContent>

      <ButtonLogin onPress={handleSignIn}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <ButtonLoginText>Entrar</ButtonLoginText>
        )}
      </ButtonLogin>
    </Container>
  );
}
