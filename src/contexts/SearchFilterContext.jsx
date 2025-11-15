import { createContext, useContext, useEffect, useState } from "react";
import useJobContext from "./JobContext";

const SearchFilterContext = createContext();

const useSearchFilterContext = () => useContext(SearchFilterContext);

export default useSearchFilterContext;

export function SearchFilterProvider({ children }) {
  const { jobs, jobsLoading, jobsError, fetchData } = useJobContext();
  const [search, setSearch] = useState("");
  const [filterJobs, setFilterJobs] = useState();

  useEffect(() => {
    setFilterJobs(jobs);
  }, [jobs]);

  function handleFilterJobs(e) {
    const { value } = e.target;
    setSearch(value);
    setFilterJobs((pre) =>
      value === ""
        ? jobs
        : [...jobs].filter((job) =>
            job.title
              .toLowerCase()
              .replaceAll(" ", "")
              .includes(value.toLowerCase().replaceAll(" ", ""))
          )
    );
  }

  return (
    <SearchFilterContext.Provider
      value={{ filterJobs, handleFilterJobs, search }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
}
