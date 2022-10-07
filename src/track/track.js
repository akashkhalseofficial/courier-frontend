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

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parcel_id: "",
      parcel : {
        id : '',
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
      }
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
                title="Enter Parcel ID to Track"
                type="primary"
              >
                <form style={{ "margin" : "20px 0px"}}>
                  <div className="form-row">
                    <div className="col-12" style={{ "width" : "70px", "verticalAlign" : "middle"}}>
                      <input
                        name="parcel_id"
                        type="text"
                        className="form-control"
                        placeholder="ID"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="submit"
                        onClick={(e) => {
                          this.trackParcel(e);
                        }}
                        value="Track Parcel"
                      />
                    </div>
                  </div>
                </form>

                {
                  this.state.parcel.status !== '' && 
                <table className="table table-striped table-bordered table-hover text-center">
                <thead className="thead-dark">
                  <tr>
                    <th>Parcel ID</th>
                    <th>Sender Name</th>
                    <th>Sender Address</th>
                    <th>Recipient Name</th>
                    <th>Recipient Address</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.parcel.id}</td>
                      <td>{this.state.parcel.sender_name}</td>
                      <td>{this.state.parcel.sender_addr}</td>
                      <td>{this.state.parcel.recipient_name}</td>
                      <td>{this.state.parcel.recipient_addr}</td>
                      <td style={{"color": "teal", "fontWeight" : "900"}}>{this.state.parcel.status}</td>
                    </tr>
                  </tbody>
                  </table>
                  }
              </Box>
            </Col>
          </Row>
        </Content>
      </>
    );
  }


  handleInputChange(event) {
    let parcel = {
      id : '',
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
    }
    this.setState({
      parcel_id: event.target.value,
      parcel : parcel
    });
  }

  trackParcel(event) {
    event.preventDefault();
    axios.get(`http://localhost:3000/parcel/`+ this.state.parcel_id)
      .then(res => {
          if (res.status === 200) {
            let data = res.data;
            data.parcel_info = data.parcel_info !== "" ? JSON.parse(res.data.parcel_info) : ""
            this.setState({
              parcel : data
            });
          }
      })
  }
}

export default Track;
