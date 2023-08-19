import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import Tags from "../Utilities/Tags";
import { chooseJob } from "../../Toolkit/Slices/JobSlice";

const JobItem = ({ job }) => {
  const dispatch = useDispatch();
  const { targetJob } = useSelector((state) => state.jobs);

  const handleClick = () => {
    dispatch(chooseJob(job));
  };
  return (
    <div
      className={`job pt-4 pb-2 px-4 bg-white rounded-3 mb-1 position-relative border-3 ${
        job.id === targetJob.id ? "border-green" : ""
      }`}
      onClick={handleClick}
    >
      <div className="job-head d-flex justify-content-start align-items-start gap-3 w-100 pb-3">
        <div className="job-head-img">
          <img src={`/images/${job.image}`} alt="job-img" />
        </div>
        <div>
          <p className="mb-0">
            <span className="me-3">Inspectorio</span>
            <span className="fx-1">
              {job.rate} <FontAwesomeIcon icon={faStar} size="2xs" />
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
        <div
          className="ms-4 position-absolute"
          style={{
            top: "20px",
            right: "20px",
          }}
        >
          <span className="btn-light-green fw-bold">{job.name}</span>
        </div>
      </div>

      <Tags tags={job.tags} />
    </div>
  );
};

export default JobItem;
