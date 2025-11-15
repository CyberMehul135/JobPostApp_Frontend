import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import AddJob from "./pages/AddJob";
import { JobProvider } from "./contexts/JobContext";
import { JobFormProvider } from "./contexts/JobFormContext";
import { ToastPopupProvider } from "./contexts/ToastPopupContext";
import { SearchFilterProvider } from "./contexts/SearchFilterContext";
import { ApiUrlProvider } from "./contexts/ApiUrlContext";

function App() {
  return (
    <BrowserRouter>
      <ApiUrlProvider>
        <ToastPopupProvider>
          <JobFormProvider>
            <JobProvider>
              <SearchFilterProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/jobs/:jobId" element={<JobDetails />} />
                  <Route path="/jobs/new" element={<AddJob />} />
                </Routes>
              </SearchFilterProvider>
            </JobProvider>
          </JobFormProvider>
        </ToastPopupProvider>
      </ApiUrlProvider>
    </BrowserRouter>
  );
}

export default App;
