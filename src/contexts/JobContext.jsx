import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import useJobFormContext from "./JobFormContext";
import useToastPopupContext from "./ToastPopupContext";
import useApiUrlContext from "./ApiUrlContext";

const JobContext = createContext();

const useJobContext = () => useContext(JobContext);

export default useJobContext;

export function JobProvider({ children }) {
  const { API_URL } = useApiUrlContext();
  const { data, loading, error, fetchData } = useFetch(`${API_URL}/api/jobs`);
  const { resetJobForm } = useJobFormContext();
  const { setPopupVisible } = useToastPopupContext();
  const navigate = useNavigate();

  async function addJob(newJob) {
    try {
      const response = await axios.post(`${API_URL}/api/jobs`, newJob);
      fetchData();
      resetJobForm();
      navigate(-1);
      setPopupVisible("Added");
    } catch (error) {
      if (error.response) {
        console.error("Backend Error:", error.response.data.error);
      } else {
        console.error("Network Error:", error.message);
      }
    }
  }

  async function deleteJob(jobId) {
    try {
      const response = await axios.delete(`${API_URL}/api/jobs/${jobId}`);
      fetchData();
      setPopupVisible("Deleted");
    } catch (error) {
      if (error.response) {
        console.error("Backend Error:", error.response.data.error);
      } else {
        console.error("Network Error:", error.message);
      }
    }
  }

  return (
    <JobContext.Provider
      value={{
        jobs: data,
        jobsLoading: loading,
        jobsError: error,
        fetchData,
        deleteJob,
        addJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}
