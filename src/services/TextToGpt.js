import axios from "axios";
import toast from "react-hot-toast";

const apiKey = import.meta.env.VITE_REACT_APP_GPT_API_KEY;

export default async function checkAnswer({ question, answer }) {
  const message = `Q: ${question}\nA: ${answer}\nRate this answer on a scale of 1 to 5:`;

  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a strict assistant that rates answers on a scale of 1 to 5.",
      },
      { role: "user", content: message },
    ],
  };

  // Make the API request
  axios
    .post(apiUrl, data, { headers })
    .then((response) => {
      const rating = parseInt(response.data.choices[0].message.content);

      // Print the rating
      console.log(`Rating: ${rating}/5`);
      return rating;
    })
    .catch((error) => {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    });
}
