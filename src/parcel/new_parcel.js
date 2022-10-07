import { Component } from "react";
import axios from 'axios';

import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
} from "adminlte-2-react";

class NewParcel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sender_name: "",
      sender_addr: "",
      sender_contact: "",
      recipient_name: "",
      recipient_addr: "",
      recipient_contact: "",
      parcel_info: {
        height: "",
        width: "",
        length: "",
        weight: "",
        price: "",
      },
      status: "Item Accepted By Courier",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <>
        <Content
          title="Dashboard"
          subTitle="Courier Dashboard"
          browserTitle="Dashboard"
        >
          <Row>
            <Col xs={12}>
              <Box
                title="New Parcel"
                type="primary"
                // footer={<Button type="submit" onClick={this.saveParcel()} text="Save Parcel" color="navy" />}
              >
                <form>
                  <div class="form-row">
                    <label class="col-md-12">Sender Info</label>
                    <div class="col col-md-6">
                      <span>Sender Name</span>
                      <input
                        name="sender_name"
                        type="text"
                        className="form-control"
                        placeholder="Sender Name"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Sender Address</span>
                      <input
                        name="sender_addr"
                        type="text"
                        className="form-control"
                        placeholder="Sender Address"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Sender Contact</span>
                      <input
                        name="sender_contact"
                        type="text"
                        className="form-control"
                        placeholder="Sender Contact"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <label class="col-md-12">Recipient Info</label>
                    <div class="col col-md-6">
                      <span>Recipient Name</span>
                      <input
                        name="recipient_name"
                        type="text"
                        className="form-control"
                        placeholder="Recipient Name"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Recipient Address</span>
                      <input
                        name="recipient_addr"
                        type="text"
                        className="form-control"
                        placeholder="Recipient Contact"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Recipient Contact</span>
                      <input
                        name="recipient_contact"
                        type="text"
                        className="form-control"
                        placeholder="Recipient Contact"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <label class="col-md-12">Parcel Info</label>
                    <div class="col col-md-6">
                      <span>Height ( cms )</span>
                      <input
                        name="height"
                        type="text"
                        className="form-control"
                        placeholder="Height in CM"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Width ( cms )</span>
                      <input
                        name="width"
                        type="text"
                        className="form-control"
                        placeholder="Width in CM"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Length ( cms )</span>
                      <input
                        name="length"
                        type="text"
                        className="form-control"
                        placeholder="Length in CM"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Weight ( gms )</span>
                      <input
                        name="weight"
                        type="text"
                        className="form-control"
                        placeholder="Weight in CM"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Price ( INR )</span>
                      <input
                        style={{ width: "70px" }}
                        name="price"
                        type="text"
                        className="form-control"
                        placeholder="Price in INR"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col col-md-6">
                      <span>Status</span>
                      <select
                        className="form-control"
                        name="status"
                        onChange={this.handleInputChange}
                      >
                        <option value="Item Accepted By Courier">
                          Item Accepted By Courier
                        </option>
                        <option value="Collected">Collected</option>
                        <option value="Shipped">Shipped</option>
                        <option value="In-Transit">In-Transit</option>
                        <option value="Arrived at Destination">
                          Arrived at Destination
                        </option>
                        <option value="Out for Delivery">
                          Out for Delivery
                        </option>
                        <option value="Ready to Pickup">Ready to Pickup</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Picked-up">Picked-up</option>
                        <option value="Unsuccessfull Delivery Attempt">
                          Unsuccessfull Delivery Attempt
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <input
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/'
                      }}
                      value="Back to Dashboard"
                    />
                      <input
                        type="submit"
                        onClick={(e) => {
                          this.saveParcel(e);
                        }}
                        value="Save Parcel"
                      />
                  </div>
                </form>
              </Box>
            </Col>
          </Row>
        </Content>
      </>
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    console.log(name);
    if (
      name === "height" ||
      name === "width" ||
      name === "length" ||
      name === "weight" ||
      name === "price"
    ) {
      this.setParcelInfo(event, name);
    } else {
      this.setState({
        [name]: event.target.value,
      });
    }
  }

  saveParcel(event) {
    event.preventDefault();
    console.log(this.state);
    if (typeof(this.state.parcel_info) === 'object') {
        this.setState({
            parcel_info: JSON.stringify(this.state.parcel_info),
          });
    }
    axios.post(`http://localhost:3000/parcel/create`, this.state)
      .then(res => {
          if (res.status === 200) {
              alert(res.data);
              window.location.href = '/';
          }
      })
  }

  setParcelInfo(event, name) {
    let pi = {
        height: "",
        width: "",
        length: "",
        weight: "",
        price: "",
      };
      if (name === "height") {
        pi.height = event.target.value;
      } else if (name === "width") {
        pi.width = event.target.value;
      } else if (name === "length") {
        pi.length = event.target.value;
      } else if (name === "weight") {
        pi.weight = event.target.value;
      } else if (name === "price") {
        pi.price = event.target.value;
      }
      this.setState({
        parcel_info: JSON.stringify(pi),
      });
  }
}

export default NewParcel;
