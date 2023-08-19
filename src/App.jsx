import { Col, Row } from "react-bootstrap";
import TargetJob from "./components/TargetJob/TargetJob";
import "./App.css";
import JobsList from "./components/Jobs/JobsList";

const App = () => {
  return (
    <div className="app py-2">
      <div className="container">
        <Row>
          <Col xl={5}>
            <JobsList />
          </Col>
          <Col xl={7} className="d-none d-xl-block">
            <TargetJob />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
