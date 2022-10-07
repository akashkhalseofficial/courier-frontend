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

class ViewParcel extends Component {
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
    };
  }

  componentDidMount() {
    this.getParcel();
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
          console.log(this.state);
        }
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
                  <table class="table table-striped table-bordered table-hover" id="parcel-view">
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
                  <table class="table table-striped table-bordered table-hover" id="parcel-view">
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
                  <table class="table table-striped table-bordered table-hover" id="parcel-view">
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
                  <table class="table table-striped table-bordered table-hover" id="parcel-view">
                    <tbody>
                      <tr>
                        <td>Parcel Status</td>
                        <td>
                          <label>{this.state.parcel.status}</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

  goBack() {
    window.history.go(-1);
  }
}

export default ViewParcel;
