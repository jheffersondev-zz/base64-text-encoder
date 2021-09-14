import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text, Share } from "react-native";
import { encode, decode } from "js-base64";

export default function () {
  const [text, setText] = useState();
  const [loaded, setLoaded] = useState(false);

  function EncodeText(text) {
    let encoded = encode(text);
    setText(encoded);
  }

  async function ShareText() {
    const share = await Share.share({
      message: text
    })
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base64 Encoder</Text>
      <TextInput
        placeholder="Type a text to encrypt"
        style={styles.input}
        onChangeText={EncodeText}
      />
      <Text>
        {"\n"}
        {"\n"}Encoded:{"\n"}
      </Text>
      <View style={styles.encryptedMessageBox}>
        <Text style={styles.encryptedMessage}>{text}</Text>
      </View>
      <View style={styles.shareBox}>
        <Button title="Whare with friends" onPress={ShareText}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 30,
  },
  input: {
    width: 360,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#f1f1f1",
  },
  encryptedMessageBox: {
    width: 360,
    padding: 20,
  },
  encryptedMessage: {
    fontWeight: "bold",
  },
  shareBox: {
    margin: 30,
  },
});
