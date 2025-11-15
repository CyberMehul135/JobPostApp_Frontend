export default function JobDetailsCardLoading() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card" style={{ height: "fit-content" }}>
          <div className="card-body">
            <p
              className="my-2"
              style={{
                backgroundColor: "#D9D9D9",
                height: "40px",
                borderRadius: "10px",
              }}
            ></p>
            <p
              className="my-2"
              style={{
                backgroundColor: "#D9D9D9",
                height: "40px",
                borderRadius: "10px",
              }}
            ></p>
            <div
              className="d-flex flex-column gap-2 flex-sm-row mb-2"
              style={{ height: "40px" }}
            >
              <p
                className="my-2 flex-fill h-100"
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "10px",
                }}
              ></p>
              <p
                className="my-2 flex-fill h-100"
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "10px",
                }}
              ></p>
            </div>
            <div
              className="d-flex flex-column gap-2 flex-sm-row mb-2"
              style={{ height: "40px" }}
            >
              <p
                className="my-2 flex-fill h-100"
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "10px",
                }}
              ></p>
              <p
                className="my-2 flex-fill h-100"
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "10px",
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
