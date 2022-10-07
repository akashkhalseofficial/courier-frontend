import { Component } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        };
    this.handleInputChange = this.handleInputChange.bind(this);

    }

    componentDidMount() {
        const isSignedIn = cookies.get('userLoggedIn') === 'true' ? true : false
        if (isSignedIn) {
            window.location.href = '/';
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
        [name]: event.target.value,
        });
      }

  render() {
    return (
      <>
        <div class="login-box">
          <div class="login-logo"></div>
          <div class="card">
            <div class="card-body login-card-body">
              <p class="login-box-msg">Sign in</p>
              <form>
              <div class="col col-md-6">
                      <span>Email</span>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="col col-md-6">
                      <span>Password</span>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  <div class="col col-md-6">
                  <input
                        type="submit"
                        onClick={(e) => {
                          this.login(e)
                        }}
                        value="Sign In"
                      />
                  </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  login(e) {
      e.preventDefault();
      if (this.state.email === 'admin' && this.state.password === 'admin') {
          cookies.set('userLoggedIn', 'true', { path: '/' });
          window.location.href = '/';
      }
  }
}

export default Login;
