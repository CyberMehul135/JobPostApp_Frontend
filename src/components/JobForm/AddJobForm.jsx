import Input from "../Inputs/Input";
import Select from "../Inputs/Select";
import TetxArea from "../Inputs/TextArea";
import useJobFormContext from "../../contexts/JobFormContext";
import useJobContext from "../../contexts/JobContext";

export default function AddJobForm() {
  const { jobForm, handleJobFormChange } = useJobFormContext();
  const { addJob } = useJobContext();

  return (
    <form
      className="my-3"
      onSubmit={(e) => {
        e.preventDefault();
        addJob(jobForm);
      }}
    >
      <Input
        id="title"
        name="title"
        label="Job Title"
        type="text"
        placeholder="Enter title"
        value={jobForm.title}
        handleChange={handleJobFormChange}
      />
      <Input
        id="companyName"
        name="companyName"
        label="Company Name"
        type="text"
        placeholder="Enter company name"
        value={jobForm.companyName}
        handleChange={handleJobFormChange}
      />
      <Input
        id="location"
        name="location"
        label="Location"
        type="text"
        placeholder="Enter location"
        value={jobForm.location}
        handleChange={handleJobFormChange}
      />
      <Input
        id="salary"
        name="salary"
        label="Salary"
        type="Number"
        placeholder="Enter salary"
        value={jobForm.salary}
        handleChange={handleJobFormChange}
      />

      <Select
        id="jobType"
        name="jobType"
        label="Job Type"
        value={jobForm.jobType}
        handleChange={handleJobFormChange}
        options={[
          { label: "Full-time(On-site)", value: "Full-time(On-site)" },
          { label: "Part-time(On-site)", value: "Part-time(On-site)" },
          { label: "Full-time(Remote)", value: "Full-time(Remote)" },
          { label: "Part-time(Remote)", value: "Part-time(Remote)" },
        ]}
        defaultOption="Select Job Type"
      />

      <TetxArea
        id="jobDescription"
        label="Job Description"
        name="jobDescription"
        value={jobForm.jobDescription}
        handleChange={handleJobFormChange}
        placeHolder="write description..."
      />

      <TetxArea
        id="qualifications"
        label="Job qualifications"
        name="qualifications"
        value={jobForm.qualifications}
        handleChange={handleJobFormChange}
        placeHolder="write qualifications..."
      />

      <button type="submit" className="btn btn-primary">
        Post Job
      </button>
    </form>
  );
}
