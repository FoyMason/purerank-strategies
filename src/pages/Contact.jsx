import React from "react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#141c26", color: "#f1efe7", minHeight: "100vh" }}>
      <Navbar showConnectButton={false} />

      <section className="text-center pt-5 pb-4">
        <div className="container">
          <p className="text-uppercase fw-bold mb-2" style={{ color: "#cb6ce6" }}>Let's Talk</p>
          <h1 className="display-4 fw-bold mb-3">Contact PureRank</h1>
          <p className="fs-5 mb-4" style={{ maxWidth: "750px", margin: "0 auto" }}>
            Whether you're ready to grow or just exploring ideas, we'd love to connect.
          </p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form action="https://formspree.io/f/mpwdeprl" method="POST" className="bg-white text-dark p-5 rounded shadow">
              <div className="row mb-4">
                <div className="col">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="firstName" name="firstName" required />
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lastName" name="lastName" required />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="form-label">Company</label>
                <input type="text" className="form-control" id="company" name="company" />
              </div>
              <div className="mb-4">
                <label htmlFor="jobTitle" className="form-label">Job Title</label>
                <input type="text" className="form-control" id="jobTitle" name="jobTitle" />
              </div>
              <div className="mb-4">
                <label htmlFor="website" className="form-label">Website</label>
                <input type="url" className="form-control" id="website" name="website" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="mb-4">
                <label htmlFor="help" className="form-label">How can we help your brand?</label>
                <textarea className="form-control" id="help" name="help" rows="4" required></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="budget" className="form-label">Annual Marketing Budget</label>
                <select className="form-select" id="budget" name="budget">
                  <option value="">Select a range</option>
                  <option value="<10k">Less than $10,000</option>
                  <option value="10k-50k">$10,000 – $50,000</option>
                  <option value="50k-100k">$50,000 – $100,000</option>
                  <option value=">100k">More than $100,000</option>
                </select>
              </div>
              <button type="submit" className="btn btn-dark fw-bold px-4 py-2">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-4">
        <p className="m-0">© {new Date().getFullYear()} PureRank Strategies. All rights reserved.</p>
      </footer>
    </div>
  );
}
