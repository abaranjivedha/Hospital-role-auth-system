function ReceptionDashboard() {
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

      <h3 className="dashboard-title">Reception Dashboard</h3>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="dashboard-card">
            <div className="card-icon">📝</div>
            <h5>Register Patient</h5>
            <p>Create new patient entry.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="dashboard-card">
            <div className="card-icon">📅</div>
            <h5>Book Appointment</h5>
            <p>Schedule doctor appointments.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="dashboard-card">
            <div className="card-icon">💳</div>
            <h5>Billing</h5>
            <p>Manage patient billing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceptionDashboard;
