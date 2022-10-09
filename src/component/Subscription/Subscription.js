import React from "react";
import "./subscription.css";
const Subscription = () => {
  return (
    <div className="container-fluid subscription">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="subscription_title">
                <h5>News Latter,subscribe Today</h5>
            </div>

            <div className="subscription-from">
                <input type="text" placeholder="Your E-mail"/>
            </div>

                <div className="subscription_button">
                    <p>subscription</p>
                </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
