import React, { useState } from "react";
import axios from "axios";
import {getProxyy} from "./App";

function Model() {
  const [file, setFile] = useState(null as any);

  function handleFileChange(event: any) {
    // Update the state with the selected file
    setFile(event.target.files[0]);
  }
  const  handleUpload = async() => {
    const formData = new FormData();

    formData.append("file", file, file.name);

    const res = await axios.post(`http://localhost:8000/uploadfile`, formData, {});
    console.log(res);
    if(res.status === 200){
      window.location.replace("/result/" + res.data.id)
    }
  };
  return (
    <div className="container upload mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h5>File Upload</h5>
          <input
            type="file"
            className="form-control mb-3 custom-file-input"
            onChange={handleFileChange}
          />
          <a className="btn " onClick={handleUpload}>
            Upload
          </a>
        </div>
      </div>
    </div>
  );
}

export default Model;