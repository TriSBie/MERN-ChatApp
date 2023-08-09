import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import CustomHeader from "@/component/customHeader";
import StandardMessageForm from "@/component/customMessageForm/StandardMessageForm";

export default function Chat() {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "buiductri2002@gmail.com",
    "Tri2072002"
  );
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps}> </MultiChatSocket>{" "}
      <MultiChatWindow
        {...chatProps}
        style={{
          height: "100vh",
        }}
        /*The Headers interface of the Fetch API allows you to perform various actions on HTTP request and response headers.*/
        renderChatHeader={(chat) => <CustomHeader chat={chat}> </CustomHeader>}
        renderMessageForm={(props) => {
          //customize
          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
        //
      ></MultiChatWindow>{" "}
    </div>
  );
}
