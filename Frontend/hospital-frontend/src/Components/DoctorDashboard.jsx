function DoctorDashboard() {

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

      <h3 className="dashboard-title">Doctor Panel</h3>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="dashboard-card">
            <div className="card-icon">🧑‍⚕️</div>
            <h5>View Patients</h5>
            <p>Access patient medical records.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="dashboard-card">
            <div className="card-icon">💊</div>
            <h5>Add Prescription</h5>
            <p>Create and manage prescriptions.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="dashboard-card">
            <div className="card-icon">📅</div>
            <h5>Appointments</h5>
            <p>View scheduled appointments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
