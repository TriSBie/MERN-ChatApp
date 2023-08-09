import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { PaperClipIcon } from "@heroicons/react/24/solid";

function MyDropzone({ setAttachment, setPreview }) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setAttachment(acceptedFiles[0]);
    setPreview(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />{" "}
      <PaperClipIcon className="message-form-icon-clip" />
    </div>
  );
}

export default MyDropzone;
