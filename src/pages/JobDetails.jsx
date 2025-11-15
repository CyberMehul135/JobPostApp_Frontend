import { useParams } from "react-router-dom";
import JobDetailsCard from "../components/JobDetailsCard/JobDetailsCard";
import Nav from "../components/Nav/Nav";

export default function JobDetails() {
  const { jobId } = useParams();

  return (
    <>
      <Nav />
      <main className="container py-2">
        <JobDetailsCard jobId={jobId} />
      </main>
    </>
  );
}
