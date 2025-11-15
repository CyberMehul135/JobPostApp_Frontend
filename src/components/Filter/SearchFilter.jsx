import Input from "../Inputs/Input";
import useSearchFilterContext from "../../contexts/SearchFilterContext";

export default function SearchFilter() {
  const { handleFilterJobs, search } = useSearchFilterContext();

  return (
    <Input
      id="search"
      name="search"
      type="text"
      value={search}
      handleChange={handleFilterJobs}
      placeholder="Search by job title."
    />
  );
}
