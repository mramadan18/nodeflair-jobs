import HeadTargetJob from "./HeadTargetJob";
import JobDescription from "./JobDescription";
import JobDetails from "./JobDetails";

const TargetJob = ({ job }) => {
  return (
    <div className="handle-scroll px-2">
      <div className="target-job pt-4 pb-2 bg-white rounded-3 mb-1">
        <HeadTargetJob job={job} />
        <JobDetails tags={job.tags} />
        <JobDescription />
      </div>
    </div>
  );
};

export default TargetJob;
