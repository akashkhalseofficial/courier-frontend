import { Component } from "react";
import axios from "axios";

import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
} from "adminlte-2-react";

class UpdateParcel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parcel: {
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
        status: "",
      },
      update: false,
      statusUpdatedValue : ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.getParcel();
  }

  handleInputChange(event) {
    this.setState({
        statusUpdatedValue : event.target.value
    });
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
              <Box title="Parcel Details" type="primary">
                <Box title="Sender Info" type="secondary" border="false">
                  <table
                    className="table table-striped table-bordered table-hover"
                    id="parcel-view"
                  >
                    <tbody>
                      <tr>
                        <td>Sender Name</td>
                        <td>
                          <label>{this.state.parcel.sender_name}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Sender Address</td>
                        <td>
                          <label>{this.state.parcel.sender_addr}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Sender Contact</td>
                        <td>
                          <label>{this.state.parcel.sender_contact}</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>

                <Box title="Recipient Info" type="secondary" border="false">
                  <table
                    className="table table-striped table-bordered table-hover"
                    id="parcel-view"
                  >
                    <tbody>
                      <tr>
                        <td>Recipient Name</td>
                        <td>
                          <label>{this.state.parcel.recipient_name}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Recipient Address</td>
                        <td>
                          <label>{this.state.parcel.recipient_addr}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Recipient Contact</td>
                        <td>
                          <label>{this.state.parcel.recipient_contact}</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
                <Box title="Parcel Info" type="secondary" border="false">
                  <table
                    className="table table-striped table-bordered table-hover"
                    id="parcel-view"
                  >
                    <tbody>
                      <tr>
                        <td>Parcel Height ( cms )</td>
                        <td>
                          <label>{this.state.parcel.parcel_info.height}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Parcel Width ( cms )</td>
                        <td>
                          <label>{this.state.parcel.parcel_info.width}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Parcel Length ( cms )</td>
                        <td>
                          <label>{this.state.parcel.parcel_info.length}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Parcel Weight ( cms )</td>
                        <td>
                          <label>{this.state.parcel.parcel_info.weight}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Parcel Price ( INR )</td>
                        <td>
                          <label>{this.state.parcel.parcel_info.price}</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
                <Box title="Parcel Status" type="secondary" border="false">
                  {!this.state.update && (
                    <table
                      className="table table-striped table-bordered table-hover"
                      id="parcel-view"
                    >
                      <tbody>
                        <tr>
                          <td>Parcel Status</td>
                          <td>
                            <label>{this.state.parcel.status}</label>
                            <i
                              style={{
                                "borderRadius": "5px",
                                padding: "5px",
                                color: "white",
                                backgroundColor: "navy",
                                margin: "5px 15px",
                              }}
                              className="fa fa-edit"
                              onClick={(e) => {
                                this.setState({
                                  update: !this.state.update,
                                });
                              }}
                            ></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                  {this.state.update && (
                    <div className="col col-md-6">
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
                      <input
                        type="submit"
                        onClick={(e) => {
                          this.setState({
                            update: !this.state.update,
                          });
                        }}
                        value="Cancel"
                      />
                      <input
                        type="submit"
                        onClick={(e) => {
                          this.updateParcelStatus(e);
                        }}
                        value="Update Status"
                      />
                    </div>
                  )}
                </Box>
                <div className="col-md-12">
                  <input
                    type="submit"
                    onClick={(e) => {
                      this.goBack(e);
                    }}
                    value="Go Back"
                  />
                </div>
              </Box>
            </Col>
          </Row>
        </Content>
      </>
    );
  }

  updateParcelStatus(e) {
      if(window.confirm('Please confirm if you want to update the status ?')) {
        let data = this.state.parcel;
        data.status = this.state.statusUpdatedValue;
        data.parcel_info =
          data.parcel_info !== "" ? JSON.stringify(data.parcel_info) : "";
          axios.put('http://localhost:3000/parcel/update', data)
          .then((res) => {
              if (res.status === 200) {
                  alert('Status updated Successfully..!')
                  window.location.reload();
              }
          }).catch((err) => {
              console.log(err);
          })
      }
  }

  goBack() {
    window.history.go(-1);
  }

  getParcel() {
    axios
      .get(`http://localhost:3000/parcel/` + this.props.match.params.id)
      .then((res) => {
        if (res.status === 200) {
          let data = res.data;
          data.parcel_info =
            data.parcel_info !== "" ? JSON.parse(res.data.parcel_info) : "";
          this.setState({ parcel: data });
        }
      });
  }
}

export default UpdateParcel;
