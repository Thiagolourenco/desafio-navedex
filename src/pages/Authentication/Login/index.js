import React, { useState, useRef } from "react";
import Svg, { Path } from "react-native-svg";

import { LogoSvg } from "../components";

// styles
import {
  Container,
  Input,
  Label,
  InputContent,
  ButtonLogin,
  ButtonLoginText,
} from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  function handleSignIn() {
    console.log("EMAIL", email, "PASSWORD", password);
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
        <ButtonLoginText>Entrar</ButtonLoginText>
      </ButtonLogin>
    </Container>
  );
}
