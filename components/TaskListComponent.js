import React, { Component } from "react";
import {
  TouchableHighlight,
  Image,
  TextInput,
  View,
  FlatList
} from "react-native";

export default class TaskListComponent extends Component {
  render() {
    return (
      <FlatList
        data={this.props.tasks}
        renderItem={({ item, index }) => {
          return (
            <View />
          );
        }}
        keyExtractor={(item, index) => item.taskName}
      />
    );
  }
}
