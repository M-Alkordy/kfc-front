import React, { useState } from "react";
import "./CheckoutModal.css";
import kfc from "../../assets/imgs/kfc.png";
import bag from "../../assets/imgs/bag.png";
const CheckoutModal = () => {
  const [isActive, setIsActive] = useState(1);
  const handleSubmit = () => {
    console.log("Asd");
  };
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#checkout"
      >
        checkout
      </button>

      <div
        class="modal fade"
        id="checkout"
        tabindex="-1"
        aria-labelledby="checkoutLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <div class="modal-body p-5">
              <div className="row ">
                <div className="col-12 col-lg-12 col-xl-6  mb-sm-4">
                  <div class="modal-content checkout-card">
                    {/* <div class="modal-header bg-black text-light p-3">
                      <span>xxx</span>
                      <h5 class="modal-title text-dark">Your Cart</h5>
                    </div> */}
                    <div class="modal-body py-2">
                      <span className="bag-first-line"></span>
                      <span className="bag-sec-line"></span>
                      <span className="bag-third-line"></span>
                      <h4 className="order  py-2 bold">YOUR CART</h4>
                      <br />
                      <div className="order-overview d-flex justify-content-between py-2">
                        <h5>Order Overview</h5>
                        <h5>Itemes(3)</h5>
                      </div>
                      <div className="cart-info p-1 my-3">
                        <div className="bag">
                          <img src={bag} alt="bag" />
                        </div>
                        <div className="sub-total d-flex  my-3">
                          <h5>Subtotal</h5>
                          <span>16.5$</span>
                        </div>
                        <div className="tax d-flex  my-3">
                          <h5>Tax</h5>
                          <span>1.5$</span>
                        </div>
                        <div className="delivery d-flex  my-3">
                          <h5>Delivery</h5>
                          <span>2$</span>
                        </div>

                        <div className="total-handler d-flex justify-content-between align-items-center p-2 ">
                          <h3>Order Total</h3>
                          <span className="display-7">20$</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xl-6  ">
                  <div class="modal-content checkout-card position-relative ">
                    <div className="tabs d-flex bold">
                      <div
                        className={`${
                          isActive === 1 ? " active" : "tab"
                        } contact `}
                        onClick={() => {
                          setIsActive(1);
                        }}
                      >
                        Contact
                      </div>
                      <div
                        className={`${
                          isActive === 2 ? "active" : "tab"
                        } donation `}
                        onClick={() => {
                          setIsActive(2);
                        }}
                      >
                        Make A Donation
                      </div>
                      <div
                        className={`${
                          isActive === 3 ? "active" : "tab"
                        } payment `}
                        onClick={() => {
                          setIsActive(3);
                        }}
                      >
                        Payment
                      </div>
                    </div>
                    <div class="modal-body ">
                      {/* info tabs */}

                      <div className="content-tabs ">
                        <form method="post">
                          <div
                            className={`${
                              isActive === 1
                                ? " content active-content "
                                : "content"
                            }`}
                            id="contact-info"
                          >
                            <div className="contact-info-holder p-3">
                              <div className="row">
                                <div className="col-6">
                                  <div className="text-field">
                                    <input type="text" required />
                                    <span></span>
                                    <label>Phone</label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="text-field">
                                    <input type="text" required />
                                    <span></span>
                                    <label>Location</label>
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-12 branches">
                                  <div className="text-field ">
                                    <input
                                      className="dropdown-toggle"
                                      id="dropdownMenuButton1"
                                      data-bs-toggle="dropdown"
                                      type="button"
                                      aria-expanded="false"
                                      required
                                    />

                                    <label>Branches</label>
                                    <ul
                                      class="dropdown-menu"
                                      aria-labelledby="dropdownMenuButton1"
                                    >
                                      <li>
                                        <a class="dropdown-item" href="#d">
                                          Action
                                        </a>
                                      </li>
                                      <li>
                                        <a class="dropdown-item" href="#s">
                                          Another action
                                        </a>
                                      </li>
                                      <li>
                                        <a class="dropdown-item" href="#w">
                                          Something else here
                                        </a>
                                      </li>
                                      <li>
                                        <a class="dropdown-item" href="#w">
                                          Something else here
                                        </a>
                                      </li>
                                      <li>
                                        <a class="dropdown-item" href="#w">
                                          Something else here
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <button
                                    type="button"
                                    class="btn  w-100 branch-choose"
                                  >
                                    Click to choose the nearest branch
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="by-providing my-3">
                              By providing my contact information,I consent to
                              calls and/or texts from KFC and/or delivery
                              providers related to my order, if applicable.
                            </div>

                            <div className="d-flex justify-content-end next-btn-holder">
                              <button
                                type="button"
                                class="btn btn-dark btn-lg  rounded-pill "
                                onClick={() => {
                                  setIsActive(2);
                                }}
                              >
                                Next
                              </button>
                            </div>
                          </div>
                          <div
                            className={`${
                              isActive === 2
                                ? " content active-content "
                                : "content"
                            }`}
                            id="donation"
                          >
                            <div className="text-center text-checkout-holder">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label text-start"
                                for="flexCheckDefault"
                              >
                                The KFC Foundation independent
                                <br />
                                non-profit organization providing
                                <br />
                                educational and crisis assistance
                                <br />
                                to employees of KFC corporate
                                <br />
                                and franchisee-owned restaurants.
                                <br />
                              </label>
                            </div>
                            <div className="learn-kfc">
                              <span>Learn more...</span>
                              <a href="aboutkfc">About KFC</a>
                            </div>

                            <div className="vector-img">
                              <img src={kfc} alt="" />
                            </div>
                            <div className="d-flex justify-content-end next-btn-holder">
                              <button
                                type="button"
                                class="btn btn-dark btn-lg rounded-pill "
                                onClick={() => {
                                  setIsActive(3);
                                }}
                              >
                                Next
                              </button>
                            </div>
                          </div>
                          <div
                            className={`${
                              isActive === 3
                                ? " content active-content "
                                : "content"
                            }`}
                            id="payment"
                          >
                              <div className="payment-holder px-2">
                              <div className="d-md-flex justify-content-between ">
                              <div className="text-field">
                                <input type="text" required />
                                <span></span>
                                <label>NickName</label>
                              </div>

                              <div className="text-field">
                                <input type="text" required />
                                <span></span>
                                <label>Name On Card</label>
                              </div>
                            </div>

                            <div className="text-field d-flex">
                              <input type="text" required />
                              <span></span>
                              <label>Card Number</label>
                            </div>

                            {/* <div className="d-md-flex justify-content-between">
                              <div className="text-field">
                                <input type="text" required />
                                <span></span>
                                <label>Expiration Date</label>
                              </div>
                              <div className="text-field">
                                <input type="text" required />
                                <span></span>
                                <label>CVV</label>
                              </div>
                            </div> */}

                            <div className="d-md-flex justify-content-between">
                          
                                <div className="text-field">
                                  <input type="text" required />
                                  <span></span>
                                  <label>Billing Zip Code</label>
                                </div>
                            
                              <div className="d-flex align-items-center">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  class="form-check-label text-start"
                                  for="flexCheckDefault"
                                >
                                  Save this card for fast use
                                </label>
                              </div>
                            </div>
                              </div>

          
                          </div>
                          <div className="d-flex justify-content-end next-btn-holder">
                              <button
                                type="button"
                                class="btn btn-dark btn-lg rounded-pill "
                                onClick={() => {
                                  handleSubmit();
                                }}
                              >
                                Submit
                              </button>
                            </div>
                        </form>
                      </div>
                      <div className="checkout-lines">
                        <span className="checkout-first-line"></span>
                        <span className="checkout-sec-line"></span>
                        <span className="checkout-third-line"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
