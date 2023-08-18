import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const HeadTargetJob = ({ job }) => {
  return (
    <div className="job-head d-flex justify-content-start align-items-start gap-4 w-100 pb-3 px-4">
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
        <a href="/" className="text-green fw-semibold mt-1 mb-2 d-block">
          Go to Company Page
        </a>
        <h2 className="h5 fw-bold mt-1">{job.title}</h2>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <span className="text-83">about 15 hours ago</span>
          <span>
            <FontAwesomeIcon icon={faLocationDot} className="me-2 text-83" />
            {job.location}
          </span>
        </div>
        <div className="mt-3 d-flex justify-content-center align-items-center gap-3">
          <button className="btn bg-green text-white fw-bold px-4 btn-apply">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="me-2" />
            Apply
          </button>
          <button className="btn border-green border-2 rounded-3 text-green fw-bold px-3 btn-save">
            Save
          </button>
          <button className="btn border-green border-2 rounded-3 btn-share">
            <img
              src="/images/share_icon.svg"
              alt="share-icon"
              className="share-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadTargetJob;
