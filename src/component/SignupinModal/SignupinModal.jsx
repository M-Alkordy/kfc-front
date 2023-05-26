import React from "react";
import "./signupinModal.css";
const signupinModal = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#signinupmodal"
        data-bs-whatever="@mdo"
      >
        Sign in / Sign Up
      </button>

      <div
        class="modal fade modal-dialog"
        id="signinupmodal"
        tabindex="-1"
        aria-labelledby="signinupmodalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <nav class="nav nav-underline display-7">
                <ul>
                  <li>
                    <a
                      href="#signup"
                      className="nav-link btn-link active"
                      data-bs-toggle="tab"
                    >
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a
                      href="#signin"
                      className="nav-link btn-link "
                      data-bs-toggle="tab"
                    >
                      Sign In
                    </a>
                  </li>
                </ul>
              </nav>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="tab-content">
                  {/* signuptab */}
                  <div className="tab-pane active" id="signup">
                    <form method="post">
                      <div className="text-field">
                        <input type="text" required />
                        <span></span>
                        <label>User Name</label>
                      </div>
                      <div className="text-field">
                        <input type="email" required />
                        <span></span>
                        <label>Email</label>
                      </div>
                      <div className="text-field">
                        <input type="password" required />
                        <span></span>
                        <label>Password</label>
                      </div>
                      <div className="text-field">
                        <input type="password" required />
                        <span></span>
                        <label>Confirm Password</label>
                      </div>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        By Selecting the box you agree to our
                        <br /> Privacy Policy and Terms Of Use
                      </label>
                      <button
                        type="submit"
                        className="signupbtn btn btn-dark btn-lg d-block m-auto mt-3"
                      >
                        signup
                      </button>
                      <a
                        className="text-center d-block display-8 mt-3 bold"
                        href="#signwithgoogle"
                      >
                        Sign Up With Google
                      </a>
                    </form>
                  </div>
                  {/* Sign in tab */}
                  <div className="tab-pane " id="signin">
                    <form method="post">
                      <div className="text-field">
                        <input type="text" required />
                        <span></span>
                        <label>Email</label>
                      </div>
                      <div className="text-field">
                        <input type="email" required />
                        <span></span>
                        <label>Password</label>
                      </div>
                      <a
                        className="text-center d-block display-8 my-4 bold"
                        href="#forgetpassword"
                      >
                        Forget Password ?
                      </a>
                      <button
                        type="submit"
                        className="signupbtn btn btn-dark btn-lg d-block m-auto my-3"
                      >
                        signin
                      </button>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signupinModal;
