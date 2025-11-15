import { Link } from "react-router-dom";
import useJobContext from "../../contexts/JobContext";

export default function JobCard({ job }) {
  const { deleteJob } = useJobContext();

  return (
    <div className="col-lg-4 col-sm-6 p-2  ">
      <div className="card">
        <div className="card-body py-4 px-4">
          <h5 className="card-title mb-3">{job.title}</h5>
          <p className="card-text mb-2">
            <strong>Company Name: </strong>
            {job.companyName}
          </p>
          <p className="card-text mb-2">
            <strong>Location: </strong>
            {job.location}
          </p>
          <p className="card-text mb-2">
            <strong>Job Type: </strong>
            {job.jobType}
          </p>
          <div className="d-flex flex-column gap-2 mt-3 flex-sm-row">
            <Link to={`/jobs/${job._id}`} className="btn btn-primary flex-fill">
              See Details
            </Link>
            <button
              className="btn btn-danger flex-fill"
              onClick={() => deleteJob(job._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
