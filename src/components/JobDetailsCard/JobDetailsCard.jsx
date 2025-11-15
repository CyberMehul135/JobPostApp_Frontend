import useApiUrlContext from "../../contexts/ApiUrlContext";
import useFetch from "../../hooks/useFetch";
import JobDetailsCardLoading from "../Loadings/JobDetailsCardLoading";

export default function JobDetailsCard({ jobId }) {
  const { API_URL } = useApiUrlContext();
  const { data, loading, error } = useFetch(`${API_URL}/api/jobs/${jobId}`);

  if (error) return <p>Error while fetching data.</p>;
  if (loading) return <JobDetailsCardLoading />;
  if (data) {
    return (
      <div className="row">
        <div className="col-12">
          <h2>{data.title}</h2>
          <div className="card">
            <div className="card-body">
              <p className="my-2">
                <strong>Company Name: </strong>
                {data.companyName}
              </p>
              <p className="my-2">
                <strong>Location: </strong>
                {data.location}
              </p>
              <p className="my-2">
                <strong>Salary: </strong>
                {data.salary}
              </p>
              <p className="my-2">
                <strong>Job Type: </strong>
                {data.jobType}
              </p>
              <p className="my-2">
                <strong>Description: </strong>
                {data.jobDescription}
              </p>
              <div className="my-2">
                <strong>Qualifications: </strong>
                <ol className="mx-4">
                  {data.qualifications.map((qualification, i) => (
                    <li className="mb-1" key={i}>
                      {qualification}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
