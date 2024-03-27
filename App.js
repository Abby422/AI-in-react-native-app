import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import OpenAI from "openai";

const App = () => {
  const openai = new OpenAI({
    apiKey: "YOUR_API_KEY",
  });
  const [generatedText, setGeneratedText] = useState("");

  const generateText = async () => {
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant designed to output JSON.",
          },
          {
            role: "user",
            content: "What is the meaning of life?",
          },
        ],
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
      });

      const result = completion.choices[0].message.content;
      const parsedResult = JSON.parse(result);
      setGeneratedText(parsedResult);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Generate Text" onPress={generateText} />
      <Text>{generatedText.answer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
