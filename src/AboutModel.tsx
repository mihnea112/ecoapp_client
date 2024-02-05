import React from "react";

function AboutModel() {
	return (
		<div className="container tx-wh">
			<p>This project is develoed by a pair of students at Nikolaus Lenau Highschool in Timișoara, Romania.</p>
			<p>It may only be used for testing and entertainment purposes. It might not be avalabile at all times.</p>
			<p>
				We suggest contacting us at{" "}
				<a className="tx-wh" href="mailto:matei.crainiceanu@nlenau.ro">
					this email adress
				</a>{" "}
				if you want to find out more about this project and if you want a testing session.
			</p>
      <p>For now the API is not publicly avalabile, but if you are interested in our project, feel free to get in touch/</p>
			<p>
				DISCLAIMER: This app and demo version of the model are developed by a team of students for the SOLVE FOR
				TOMORROW contest 2024. All rights are reserved. You may not use any of the technology we have developed. This
				website is for a demo of how our API should work.
			</p>
			<p>
				Note: It is not avalabile at all times. If you want to test this project outside the avalability that we offer,
				please get in contact in using the email adress above.
			</p>
		</div>
	);
}


export default AboutModel;
