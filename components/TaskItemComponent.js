/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
TaskItemComponent => show information of each task
*/
import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Platform,
  TouchableOpacity,
  RefreshControl,
  TextInput
} from "react-native";

export default class TaskItemComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            this.props.onToggleTask(this.props.taskId);
          }}
          style={{
            alignItems: "flex-start",
            padding: 10,
            backgroundColor: this.props.completed == true ? "black" : "green"
          }}
        >
        <Text style={{ color: "black" }}>{this.props.taskName}</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}
