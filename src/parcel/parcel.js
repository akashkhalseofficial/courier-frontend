import { Component } from "react";

import axios from 'axios';

import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
  DataTable
} from "adminlte-2-react";

class Parcel extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
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

  viewParcel(e, id) {
    e.preventDefault();
    console.log(id);
    window.location.href = '/parcel/' + id
  }

  updateParcel(e, id) {
    e.preventDefault();
    console.log(id);

    window.location.href = 'parcel/update/' + id
  }

  deleteParcel(e, id) {
    e.preventDefault();
    console.log(id);
    if (window.confirm('Are you sure you want to continue to delete the Parcel record ?')) {
      axios.delete(`http://localhost:3000/del_parcel/${id}`,).then(res => {
        if (res.status === 200) {
          alert(res.data);
          window.location.reload();
        }
      }).catch(err => {
        console.log(err)
      })
    }
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
              <Box
                title="Parcel Data"
                type="primary"
              >
                <table class="table table-striped table-bordered table-hover text-center">
                <thead class="thead-dark">
                  <tr>
                    <th>Parcel ID</th>
                    <th>Sender Name</th>
                    <th>Recipient Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                {
                  this.state.parcels.map((p, i) => {
                    return(
                      <tr key={'p' + i}>
                        <td>{p.id}</td>
                        <td>{p.sender_name}</td>
                        <td>{p.recipient_name}</td>
                        <td style={{"color": "teal", "fontWeight" : "900"}}>{p.status}</td>
                        <td>
                          <i style={{"borderRadius": "5px", "padding": "5px", "color": "white", "backgroundColor" : "teal" , "margin" : "5px"}} class="fa fa-eye" onClick={(e) => {
                        this.viewParcel(e, p.id);
                      }}></i>
                          <i style={{"borderRadius": "5px", "padding": "5px", "color": "white", "backgroundColor" : "navy" , "margin" : "5px"}} class="fa fa-edit" onClick={(e) => {
                        this.updateParcel(e, p.id);
                      }}></i>
                          <i style={{"borderRadius": "5px", "padding": "5px", "color": "white", "backgroundColor" : "red" , "margin" : "5px"}} class="fa fa-trash" onClick={(e) => {
                        this.deleteParcel(e, p.id);
                      }}></i>
                        </td>
                      </tr>
                      )
                    })
                  }
                  </tbody>
                  </table>
                  <div class="col-md-12">
                    <input
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/'
                      }}
                      value="Back to Dashboard"
                    />
                  </div>
              </Box>
            </Col>
          </Row>
        </Content>
      </>
    );
  }
}

export default Parcel;
