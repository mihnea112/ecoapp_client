import Spinnner from "react-bootstrap/Spinner";

function Spinner() {
  return (
    <div className ="center-abs spinner">
      <Spinnner animation="border" role="status" className="spinner"></Spinnner>
      <h5 className="span_upload">Wait for us while we do our magic...</h5>
    </div>
  );
}

export default Spinner;
