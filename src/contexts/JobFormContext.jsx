import { createContext, useContext, useState } from "react";

const JobFormContext = createContext();

const useJobFormContext = () => useContext(JobFormContext);

export default useJobFormContext;

export function JobFormProvider({ children }) {
  const [jobForm, setJobForm] = useState({
    title: "",
    companyName: "",
    location: "",
    salary: "",
    jobType: "",
    jobDescription: "",
    qualifications: [],
  });

  function handleJobFormChange(e) {
    const { value, name } = e.target;
    setJobForm((pre) => ({
      ...pre,
      [name]: name === "qualifications" ? value.split(",") : value,
    }));
  }

  function resetJobForm() {
    setJobForm((pre) => ({
      ...pre,
      title: "",
      companyName: "",
      location: "",
      salary: "",
      jobType: "",
      jobDescription: "",
      qualifications: [],
    }));
  }

  return (
    <JobFormContext.Provider
      value={{ jobForm, handleJobFormChange, resetJobForm }}
    >
      {children}
    </JobFormContext.Provider>
  );
}
