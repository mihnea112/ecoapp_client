function Home() {
	return (
		<>
			<section className="banner">
				<div className="container">
					<div className="hero centerd">
						<h1>EcoApp</h1>
						<p>using the newest tehncologies for a greener planet</p>
						<a href="/test" className="btn btn-lg">
							Try Now
						</a>
					</div>
				</div>
			</section>
			<section className="about">
				<div className="container">
					<div className="row">
						<div className="col-md-6 about_div">
							<h1>Public API</h1>
							<p>
								Soon you will be able to use the technologies that we develop for a small fee, so that you can save
								money and time, when building the future solutions that will save our planet!
							</p>
							<a href="/model" className="btn btn-lg">
								Read more{" "}
							</a>
						</div>
					</div>
				</div>
			</section>
			<div className="container my-4">
				<p>
					DISCLAIMER: This app and demo version of the model are developed by a team of students for the SOLVE FOR
					TOMORROW contest 2024. All rights are reserved. You may not use any of the technology we have developed. This
					website is for a demo of how our API should work.
				</p>
				<p>
					Note: It is not avalabile at all times. If you want to test this prject outside the avalability that we offer,
					please get in contact in using some of the methods listed in the Model/About sections.
				</p>
			</div>
		</>
	);
}
export default Home;
