# React Native OpenAI Integration

## Overview

This repository provides a simple guide on integrating OpenAI's language models into your React Native application. With OpenAI's API, you can leverage powerful natural language processing capabilities to enhance your app's functionality.

## Setup

### Obtaining OpenAI API Key

1. Sign up for an account on the [OpenAI website](https://openai.com/).
2. After logging in, navigate to the API section and generate an API key.

### Installation

1. Clone this repository or create a new React Native project:

   ```bash
   npx react-native init YourAppName
   ```

2. Install the required packages:

   ```bash
   npm install openai 
   ```

### Configuration

In your React Native project, create a file to store your OpenAI API key. For example, you can create a file named `openaiConfig.js`:

```javascript
// openaiConfig.js
export const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';
```

### Usage

1. Import the OpenAI library into your React Native component:

   ```javascript
   import OpenAI from 'openai';
   ```

2. Initialize OpenAI with your API key:

   ```javascript
   const openai = new OpenAI({
     apiKey: OPENAI_API_KEY,
   });
   ```

3. Use the OpenAI instance to make requests to the API:

   ```javascript
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

       setGeneratedText(completion.choices[0].message);
     } catch (error) {
       console.error('Error:', error);
     }
   };
   ```

4. Replace `'YOUR_OPENAI_API_KEY'` with your actual OpenAI API key.

## Example

Check out the provided example in `App.js` to see how to integrate OpenAI into your React Native app.

Written by Abigail Theuri

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
