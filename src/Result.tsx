import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Spinner from "./Spinner";


function Result() {
	const {id} = useParams();
	const [detectionData, setDetectionData] = useState("null");
	const [cont, setCont] = useState(true);

	var [counter, setCounter] = useState(0);

	useEffect(() => {
		if (counter > (Number(process.env.REACT_APP_RESULT_TRY) | 10)) {
			alert("error");
			window.location.replace("/");
			return;
		}

		const fetchData = async () => {
			await fetch(`${process.env.REACT_APP_APIURL}/recog/${id}`)
				.then((response) => response.json())
				.then((data) => {
					if (data.recognised > 1) {
						setDetectionData(data);
					} else {
						setCont((prevData) => !prevData);
					}
				});
		};

		const timer = setTimeout(() => {
			fetchData();
		}, 500);

		setCounter((prev) => prev + 1);

		return () => clearTimeout(timer);
		// eslint-disable-next-line
	}, [cont, id]);

	return (
		<>
			{(detectionData as any).recognised <= 1 ? (
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
										<img src={`${process.env.REACT_APP_APIURL}/file/${(detectionData as any).fname}`} alt="recognized pic"></img>
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
