function NurseDashboard() {

    const username = localStorage.getItem("username");

        const logout = () => {
            localStorage.clear();
            window.location.href = "/";
        };
  return (
    <div className="dashboard-container">

      <nav className="navbar navbar-dark navbar-dark-custom mb-4">
        <div className="container-fluid">
          <span className="navbar-brand">Hospital System</span>
          <div>
            <span className="me-3">Welcome, {username}</span>
            <button className="btn btn-danger btn-sm" onClick={logout}>
              Logout
            </button>
          </div>

        </div>
      </nav>

      <h3 className="dashboard-title">Nurse Dashboard</h3>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="dashboard-card">
            <div className="card-icon">❤️</div>
            <h5>Update Vitals</h5>
            <p>Record patient vitals.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="dashboard-card">
            <div className="card-icon">📋</div>
            <h5>Assigned Patients</h5>
            <p>Check patient assignments.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="dashboard-card">
            <div className="card-icon">🏥</div>
            <h5>Ward Details</h5>
            <p>View ward information.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NurseDashboard;
