import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Tags from "../Utilities/Tags";

const JobDetails = () => {
  const { tags } = useSelector((state) => state.jobs.targetJob);
  return (
    <div className="job-details mt-4 pb-4 px-4">
      <Row>
        <Col md={6}>
          <h5 className="fw-bold">Job Type</h5>
          <p className="text-83">Permanent</p>
        </Col>
        <Col md={6}>
          <h5 className="fw-bold">Years of Experience</h5>
          <p className="text-83">Information not provided</p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          <h5 className="fw-bold">Tech Stacks</h5>

          <Tags tags={tags} />
        </Col>
      </Row>
    </div>
  );
};

export default JobDetails;
