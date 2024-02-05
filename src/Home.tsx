function Home() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="hero centerd">
            <h1>EcoApp</h1>
            <p>using the newest tehncologies for a greener planet</p>
            <a href="" className="btn btn-lg">
              Try Now
            </a>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="logo512.png"></img>
            </div>
            <div className="col-md-6 about_div">
              <h1>Our Green App</h1>
              <p>using the newest tehncologies for a greener planet</p>
              <a href="" className="btn btn-lg">
                Generate Keys
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
