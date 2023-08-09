import React, { useCallback, useState } from "react";
import {
  XMarkIcon,
  PaperClipIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import Dropzone from "react-dropzone";
import MyDropzone from "../utils/dropzone";

const MessageFormUI = ({
  setAttachment,
  setMessage,
  message,
  handleChange,
  handleSubmit,
}) => {
  //not any component are used to upload
  const [preview, setPreview] = useState("");
  return (
    <div className="message-form-container">
      {" "}
      {preview && (
        <div className="message-form-preview">
          <img
            alt=""
            className="message-form-preview-image"
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
            //
          />{" "}
          <XMarkIcon
            className="message-form-icon-x"
            onClick={() => {
              setAttachment("");
              setPreview("");
            }}
          />{" "}
        </div>
      )}{" "}
      <div className="message-form">
        <div className="message-form-input-container">
          <input
            className="message-form-input"
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Send message"
          />
        </div>{" "}
        <div className="message-form-icons">
          <MyDropzone setAttachment={setAttachment} setPreview={setPreview} />{" "}
          <hr className="vertical-line" />
          <PaperAirplaneIcon
            className="message-form-icon-airplane"
            onClick={() => {
              setPreview(""); //after send - clear out content of preview
              //create handleSubmit
              handleSubmit();
            }}
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default MessageFormUI;
