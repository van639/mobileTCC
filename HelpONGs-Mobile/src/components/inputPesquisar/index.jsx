import { TextInput, View } from "react-native";
import React from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";

export default function InputPesquisar({onChangeText}) {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} />
      <TextInput
        style={styles.input}
        maxLength={100}
        placeholder={"Pesquise por uma ONG"}
        onChangeText={onChangeText}
      />
    </View>
  );
}

InputPesquisar.propTypes = {
  onChangeText: PropTypes.func,
};
