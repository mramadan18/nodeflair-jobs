import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import JobItem from "./components/JobItem";
import TargetJob from "./components/TargetJob/TargetJob";
import jobsData from "./data/data";
import "./App.css";

const App = () => {
  const [jobs] = useState(jobsData);
  const [targetJob, setTargetJob] = useState(jobs[0]);

  const handleTargetJob = (job) => {
    setTargetJob(job);
  };

  return (
    <div className="app py-2">
      <div className="container">
        <Row>
          <Col xl={5}>
            {jobs?.map((job, index) => (
              <JobItem
                key={job.id}
                index={index}
                job={job}
                handleTargetJob={() => handleTargetJob(job)}
              />
            ))}
          </Col>
          <Col xl={7}>
            <TargetJob job={targetJob} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
