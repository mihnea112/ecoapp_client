import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

function Result() {
  const { id } = useParams();
  const [detectionData, setDetectionData] = useState("null");
  var counter = 0;
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:8000/recog/" + id)
        .then((response) => response.json())
        .then((data) => {
          setDetectionData(data);
        });
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  console.log(detectionData);
  return (
    <>
      {(detectionData as any).recognised === 0 ||
      (detectionData as any).recognised === 1 ? (
        <Spinner />
      ) : (
        <section className="result">
          <div className="contianer">
            {detectionData === "null" ? (
              <Spinner />
            ) : (
              <>
                <div className="row">
                  <div className="col-md-6">
                    <table>
                      <tbody>
                        {(detectionData as any).error != null ? (
                          <>
                            {" "}
                            <tr>
                              <td>Error:</td>
                              <td>{(detectionData as any).error}</td>
                            </tr>
                          </>
                        ) : (
                          <>
                            <tr>
                              <td>File Name:</td>
                              <td>{(detectionData as any).fname}</td>
                            </tr>
                            <tr>
                              <td>Recognition Name:</td>
                              <td>{(detectionData as any).recognitionName}</td>
                            </tr>
                            <tr>
                              <td>Recognition Confidence:</td>
                              <td>{(detectionData as any).recognitionConf}</td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <img
                      src={`http://localhost:8000/file/${
                        (detectionData as any).fname
                      }`}
                    ></img>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
}

export default Result;
