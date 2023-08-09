import React, { useState } from "react";
import MessageFormUI from "./MessageFormUI";

export default function StandardMessageForm({ props, activeChat }) {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const attach = attachment
      ? [{ blob: attachment, file: attachment.name }]
      : [];
    const form = {
      attachments: attach, // send attachment files
      created: date, // date create of chatting time
      sender_username: props.username, // people who logged in
      text: message ? message : null, //send message from text inputted
      activeChatId: activeChat.id, // get the chatting room id
    };
    props.onSubmit(form);
    setAttachment("");
    setMessage("");
  };
  //reuse - component - less time-comsuming
  return (
    <MessageFormUI
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      setAttachment={setAttachment}
      // setMessage={setMessage} ~ not required - since handleSubmit automatically set empty when it sends
      message={message}
    />
  );
}
