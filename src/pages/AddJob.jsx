import AddJobForm from "../components/JobForm/AddJobForm";
import Nav from "../components/Nav/Nav";

export default function AddJob() {
  return (
    <>
      <Nav />
      <main className="container py-2">
        <header>
          <h2>Post a Job</h2>
        </header>
        <AddJobForm />
      </main>
    </>
  );
}
