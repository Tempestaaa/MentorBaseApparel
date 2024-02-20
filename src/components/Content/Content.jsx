import "./Content.css";
import submitIcon from "../../assets/images/icon-arrow.svg";
import errorIcon from "../../assets/images/icon-error.svg";
import { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const Content = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleError = (e) => {
    e.preventDefault();
    email.match(emailRegex) ? setError(false) : setError(true);
  };

  return (
    <div className="content">
      <h1>
        We're <span>coming soon</span>
      </h1>
      <p>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <form>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="submit-btn">
            {error && (
              <div className="error-icon">
                <img src={errorIcon} />
              </div>
            )}
            <button
              type="submit"
              onClick={(e) => {
                handleError(e);
              }}
            >
              <img src={submitIcon} />
            </button>
          </div>
        </div>
        {error && <label>Please provide a valid email</label>}
      </form>
    </div>
  );
};

export default Content;
