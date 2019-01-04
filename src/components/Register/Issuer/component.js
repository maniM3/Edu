import React, { Component } from "react";
import Uppernav from "../../UpperNav/component";
import Carousel from "../../Carousel/component";
import "./issuer.css";
class issuer extends Component {
  //state = {  }
  render() {
    return (
      <div>
        <Uppernav />
        <Carousel />

        <div className="container">
          <div className="iss">
            <h2 className="h">Academic Institutes Registration form</h2>
            <br />
            <form className="form-horizontal" action="/action_page.php">
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  Institute Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Company Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  Institute Code
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Company Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  Institute AISHE Code
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Company Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  Statutory Body
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Company Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="ctgry">
                  Statutory Body
                </label>
                <div className="col-sm-10">
                  <select>
                    <option value="vc1">University Grants Commission</option>
                    <option value="vc2">Indian Nursing Council</option>
                    <option value="vc3">
                      National Council of Teacher Education
                    </option>
                    <option value="vc4">Rehabilitation Council of India</option>
                    <option value="vc5">Medical Council of India</option>
                    <option value="vc6">
                      All India Council for Technical Education
                    </option>
                    <option value="vc6">Dental Council of India</option>
                    <option>Council of Architecture</option>
                    <option>Pharmacy Council of India</option>
                    <option>Bar Council of India</option>
                    <option>Central Council of Homeopathy</option>
                    <option>Central Council of Indian Medicine</option>
                    <option>
                      National Council for Hotel Management and Catering
                      Technology
                    </option>
                    <option>
                      Indian Council of Agricultural Research Institute of
                      Company
                    </option>
                    <option>Secretaries of India </option>
                    <option>Central Government</option>
                    <option>State Government</option>
                    <option>Institute of Chartered Accountants of India</option>
                    <option>Institute of Actuaries of India</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="form-group">
                <h4>Company Details</h4>
                <label className="control-label col-sm-2" for="email">
                  Company Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Company Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  Address
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="comment"
                    placeholder="Enter address in full"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  Website URL
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter website url"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  GST Identification Number
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter GST Identification Number"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  GST State Code
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter GST State Code"
                  />
                </div>
              </div>
              <br />
              <div className="form-group">
                <h4>Contact Person Details</h4>
                <label className="control-label col-sm-2" for="email">
                  Company Person Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Person's Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  Email{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="url"
                    placeholder="Enter email ID"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  Mobile Number
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  Landline number
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter Landline Number"
                  />
                </div>
              </div>
              <br />

              <div className="form-group">
                <h4>Alternative Contact Person Details</h4>
                <label className="control-label col-sm-2" for="email">
                  Alternative Contact Person Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Person's Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  Alternative Contact Person Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="url"
                    placeholder="Enter email ID"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  Alternative Contact Person Mobile Number
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="email">
                  Alternative Contact Person Landline number
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Enter Landline Number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-sm-2" for="pwd">
                  Password:
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default issuer;
