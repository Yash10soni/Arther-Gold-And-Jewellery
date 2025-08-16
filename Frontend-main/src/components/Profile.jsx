import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "wouter";
import "./Profile.css";

export default function Profile() {
  const [, navigate] = useLocation();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const mockUser = {
      firstName: "Yash",
      lastName: "Soni",
      email: "yash@example.com",
      profileImageUrl: "",
    };
    setUser(mockUser);
    setIsAuthenticated(true);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return (
      <div className="container loading-spinner">
        <div className="spinner" />
      </div>
    );
  }

  if (!isAuthenticated || !user) return null;

  const userInitials =
    user.firstName && user.lastName
      ? `${user.firstName[0]}${user.lastName[0]}`
      : user.email
      ? user.email[0].toUpperCase()
      : "U";

  const fullName =
    user.firstName && user.lastName
      ? `${user.firstName} ${user.lastName}`
      : "User";

  return (
    <>
      <Helmet>
        <title>My Account</title>
        <meta name="description" content="Manage your account." />
      </Helmet>

      <div className="container">
        <div className="profile-wrapper">
          <aside className="sidebar">
            <div className="profile-card">
              <div className="avatar">{userInitials}</div>
              <h2 className="name">{fullName}</h2>
              <p className="email">{user.email}</p>

              <nav className="tabs">
                {["profile", "orders", "wishlist", "addresses", "payment"].map(
                  (tab) => (
                    <button
                      key={tab}
                      className={`tab-button ${
                        activeTab === tab ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  )
                )}
              </nav>

              <button className="signout-button" onClick={() => navigate("/logout")}>
                Sign Out
              </button>
            </div>
          </aside>

          <main className="main-content">
            <div className="content-card">
              {activeTab === "profile" ? (
                <>
                  <h2 className="section-title">Profile Information</h2>
                  <form className="profile-form">
                    <div className="form-row">
                      <input
                        defaultValue={user.firstName}
                        className="input"
                        placeholder="First Name"
                      />
                      <input
                        defaultValue={user.lastName}
                        className="input"
                        placeholder="Last Name"
                      />
                    </div>
                    <input
                      defaultValue={user.email}
                      className="input"
                      disabled
                    />
                    <button type="submit" className="save-button">
                      Save Changes
                    </button>
                  </form>
                </>
              ) : (
                <div className="no-data">No data available for this section.</div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
