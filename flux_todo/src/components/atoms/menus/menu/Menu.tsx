import React from "react";
import { Platform, Text } from "react-native";
import { MenuView } from "@react-native-menu/menu";
import styled from 'styled-components/native'

const Container = styled.View`
  position: absolute;
  left: 0;
  top: -200px;
  height: 200px;
  width: 100px;
  background-color: white;
  border:1px solid red;
`
const Menu = () => {
  return (
    <Container>
      <MenuView
        title="Menu title"
        onPressAction={({ nativeEvent }) => {
          console.warn(JSON.stringify(nativeEvent));
        }}
        actions={[
          {
            id: "share",
            title: "Share Action",
            titleColor: "#46F289",
            subtitle: "Share action on SNS",
            image: Platform.select({
              ios: "square.and.arrow.up",
              android: "ic_menu_share"
            }),
            imageColor: "#46F289",
            state: "on"
          }
        ]}
      >
        <Text>Hello</Text>
      </MenuView>
    </Container>

  );
};

export default Menu
