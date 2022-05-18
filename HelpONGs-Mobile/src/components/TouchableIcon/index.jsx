import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";

export default function TouchableIcon() {
  return (
    <TouchableOpacity onPress={propTypes.a}>
      <Icon name={props.iconName} />
    </TouchableOpacity>
  );
}

TouchableIcon.propTypes = {
  a: PropTypes.any,
};