import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import Tag from "./Utilities/Tag";

const JobItem = ({ index, job, handleTargetJob }) => {
  return (
    <div
      className={`job pt-4 pb-2 px-4 bg-white rounded-3 mb-1 border-2 ${
        index === 0 ? "border-green" : ""
      }`}
      onClick={handleTargetJob}
    >
      <div className="job-head d-flex justify-content-evenly align-items-start w-100 pb-3">
        <div className="job-head-img">
          <img src={`/images/${job.image}`} alt="job-1" />
        </div>
        <div>
          <p className="mb-0">
            <span className="me-3">Inspectorio</span>
            <span className="fx-1">
              3.7 <FontAwesomeIcon icon={faStar} size="2xs" />
            </span>
          </p>
          <h2 className="h5 fw-bold mt-1">{job.title}</h2>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <span className="text-green fw-bold">about 15 hours ago</span>
            <span>
              <FontAwesomeIcon icon={faLocationDot} className="me-2 text-83" />
              {job.location}
            </span>
          </div>
        </div>
        <div className="ms-4">
          <span className="btn-light-green">Others</span>
        </div>
      </div>
      <div className="d-flex justify-content-start align-items-center gap-3">
        {job.tags.map((tag, index) => (
          <Tag key={index} content={tag} />
        ))}
      </div>
    </div>
  );
};

export default JobItem;
