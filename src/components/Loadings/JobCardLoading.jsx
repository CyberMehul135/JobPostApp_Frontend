export default function JobCardLoading() {
  return (
    <div className="col-lg-4 col-sm-6 p-2">
      <div className="card" style={{ height: "220px" }}>
        <div className="card-body py-4 px-4">
          <h5
            className="card-title mb-3 h-25 rounded"
            style={{ backgroundColor: "#D9D9D9" }}
          ></h5>
          <p
            className="card-text mb-2 h-25 rounded"
            style={{ backgroundColor: "#D9D9D9" }}
          ></p>
          <div className="d-flex flex-column gap-2 mt-3 flex-sm-row h-25">
            <div
              className="flex-fill h-100 rounded"
              style={{ backgroundColor: "#D9D9D9" }}
            ></div>
            <div
              className="flex-fill h-100 rounded"
              style={{ backgroundColor: "#D9D9D9" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
