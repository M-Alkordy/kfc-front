import React from "react";
import "./signupinModal.css";
import burgeImg from "../../assets/imgs/burger-img.png";
import coffe from "../../assets/imgs/coffe.png";
import cup from "../../assets/imgs/cup.png";
import google from "../../assets/imgs/google.png";
import nagit from "../../assets/imgs/nagit.png";
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
              <span class="first-red-line"></span>
              <span class="second-red-line"></span>
              <span class="third-red-line"></span>
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
                <div className="burgerImg">
                  <img src={burgeImg} alt="burge-img" />
                </div>

                <div className="coffe">
                  <img src={coffe} alt="coffe" />
                </div>
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
                  {/* signup tab */}
                  <div className="tab-pane signup active" id="signup">
                    <form method="post">
                      <div className="d-flex justify-content-center ">
                        <img className="mx-1" src={google} alt="cup" />
                        <a
                          className="text-center d-block signwithgoogle my-1"
                          href="#signwithgoogle"
                        >
                          Sign Up With Google
                        </a>
                      </div>
                      <a
                        className="text-center d-block createnewaccount "
                        href="#signwithgoogle"
                      >
                        OR Create New Account
                      </a>
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
                        id="Signincheckbox"
                      />
                      <label
                        class="form-check-label-signup"
                        for="Signincheckbox"
                      >
                        By Selecting the box you agree to our
                        <br /> <a href="privacy-policy">
                          Privacy Policy
                        </a> and <a href="termsofuse">Terms Of Use</a>
                      </label>
                      <div className="cup">
                        <img src={cup} alt="cup" />
                      </div>
                      <button
                        type="submit"
                        className="signupbtn btn btn-lg text-light d-block m-auto w-100 my-2"
                      >
                        Signup
                      </button>
                    </form>
                  </div>
                  {/* login tab */}
                  <div className="tab-pane login" id="signin">
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
                        className="text-left d-block display-8 my-4 bold forgetpassword"
                        href="#forgetpassword"
                      >
                        Forget Password ?
                      </a>
                      <div className="nagit">
                        <img src={nagit} alt="nagit" />
                      </div>
                      <div className="cup">
                        <img src={cup} alt="cup" />
                      </div>
     <div className="form-check-login-handler">
     <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="Logincheckbox"
                      />
                      <label class="form-check-label-login" for="Logincheckbox">
                        By logging into the application or proceeding <br /> as a
                        guest, you agree to our
                        <br /> <a href="privacy-policy">
                          Privacy Policy
                        </a> and <a href="termsofuse">Terms Of Use</a>
                      </label>
     </div>

                      <button
                        type="submit"
                        className="signupbtn btn text-light btn-lg d-block m-auto w-100 my-4"
                      >
                        Log In
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
