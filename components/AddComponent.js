import React, { Component } from "react";
import { TouchableHighlight, Image, TextInput, View } from "react-native";
import { addNewTask } from "../actions";

export default class AddComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    <View
      style={{
        backgroundColor: "tomato",
        flexDirection: "row",
        justifyContent: "flex-end"
      }}
    >
      <TextInput
        style={{
          height: 40,
          width: 200,
          margin: 10,
          padding: 10,
          borderColor: "white",
          borderWidth: 1,
          color: "white"
        }}
        keyboardType="default"
        placeholder="Enter task name"
        autoCapitalize="none"
        autoChangeText={text => {
          this.setState({ newTaskName: text });
        }}
      />
      <TouchableHighlight
        style={{ marginRight: 10 }}
        underlayColor="blue"
        onPress={event => {
          if (!this.state.newTaskName.trim()) {
            return;
          }
        }}
      >
        <Image
          style={{ width: 35, height: 35 }}
          source={require("../icons/icons-add.png")}
        />
      </TouchableHighlight>
    </View>;
  }
}
