import { View, TextInput, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";

export default function InputUnderline({
  iconName,
  color,
  size,
  placeholder,
  onChangeText,
  keyboardType,
  value,
  max
}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon
          name={iconName}
          size={size}
          style={[styles.icon, { color: color }]}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={max}
        value={value}
      />
    </View>
  );
}

InputUnderline.propTypes = {
  iconName: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  value: PropTypes.string,
  max: PropTypes.number
};