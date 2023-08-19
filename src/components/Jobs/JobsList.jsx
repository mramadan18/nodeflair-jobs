import { useSelector } from "react-redux";
import JobItem from "./JobItem";

const JobsList = () => {
  const { jobs } = useSelector((state) => state.jobs);

  return (
    <section>
      {jobs?.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </section>
  );
};

export default JobsList;
