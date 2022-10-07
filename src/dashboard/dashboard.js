import { Component } from "react";
import axios from 'axios';
import Home from "../components/Home";

import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
  DataTable
} from "adminlte-2-react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    parcels: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/parcels`)
      .then(res => {
        const parcels = res.data;
        this.setState({ parcels });
      })
  }

  render() {
    if(!this.state.parcels || !this.state.parcels.length) 
      return;
    else
    return (
      <>
        <Content
          title="Dashboard"
          subTitle="Courier Dashboard"
          browserTitle="Dashboard"
        >
          <Row>
            <Col xs={12}>
            {/* <Home /> */}
              <Box
                title="Parcel Data"
                type="primary"
              >
                <table class="table table-striped table-bordered table-hover text-center">
                <thead class="thead-dark">
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
                {
                  this.state.parcels.map((p, i) => {
                    return(
                      <tr key={'d' + i}>
                        <td>{p.id}</td>
                        <td>{p.sender_name}</td>
                        <td>{p.sender_addr}</td>
                        <td>{p.recipient_name}</td>
                        <td>{p.recipient_addr}</td>
                        <td style={{"color": "teal", "fontWeight" : "900"}}>{p.status}</td>
                      </tr>
                      )
                    })
                  }
                  </tbody>
                  </table>
              </Box>
            </Col>
          </Row>
        </Content>
      </>
    );
  }
}

export default Dashboard;
