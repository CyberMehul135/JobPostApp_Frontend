import JobCard from "../components/JobCard/JobCard";
import JobCardLoading from "../components/Loadings/JobCardLoading";
import Nav from "../components/Nav/Nav";
import DefaultPopup from "../components/ToastPopup/DefaultPopup";
import useJobContext from "../contexts/JobContext";
import SearchFilter from "../components/Filter/SearchFilter";
import useSearchFilterContext from "../contexts/SearchFilterContext";

export default function Home() {
  const { jobs, jobsLoading, jobsError } = useJobContext();
  const { filterJobs } = useSearchFilterContext();

  return (
    <>
      <Nav />
      <DefaultPopup />
      <main className="container py-3">
        <SearchFilter />
        <h2>All Jobs</h2>
        <div className="row">
          {filterJobs ? (
            filterJobs.length > 0 ? (
              filterJobs.map((job) => <JobCard key={job._id} job={job} />)
            ) : (
              <p>No jobs found.</p>
            )
          ) : jobsLoading ? (
            [...Array(6)].map((card, i) => <JobCardLoading key={i} />)
          ) : (
            jobsError && <p>Error while fetching data</p>
          )}
        </div>
      </main>
    </>
  );
}
