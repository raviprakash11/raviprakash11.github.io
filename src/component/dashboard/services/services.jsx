import axios from "axios";
import React from "react";

const baseURL = "https://api.openai.com/v1/completions";
var postData = {
  "model": "text-davinci-003",
  "prompt": "Correct this to standard English:\n\nShe no went to the market.",
  "temperature": 0,
  "max_tokens": 60,
  "top_p": 1.0,
  "frequency_penalty": 0.0,
  "presence_penalty": 0.0,
};
let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Authorization": "Bearer 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",
  },
};
console.log("Auth", axiosConfig);

export default function services() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.post(baseURL,postData,axiosConfig).then((response) => {
      setPost(response.data);
    });
  }, []);
console.log("----------------------------------------",post);
  function createPost() {

    axios
      .post("https://api.openai.com/v1/completions", postData, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }

  if (!post) return "No post!";

  return (
    // <div>
    //   <h1>{post.id}</h1>
    //   <p>{post.choice}</p>
    //   <button onClick={createPost}>Create Post</button>
    // </div>
    post
  );
}
