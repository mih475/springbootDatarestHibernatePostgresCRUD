import React from 'react';
// import "bootstrap/dist/css/bootstrap.css";
// import './App.css';

import EmployeeList from './components/EmployeeList';
import EditEmployee from './components/EditEmployee';
import CreateEmployee from './components/CreateEmployee';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import NotFound from './components/NotFound';


import { BrowserRouter as Router, Switch, Route, Link, RouteComponentProps, BrowserRouter } from "react-router-dom";
import routes from './components/routes';


window.onerror = (msg, url, line, col, error) => {
  // Note that col & error are new to the HTML 5 spec and may not be 
  // supported in every browser.  It worked for me in Chrome.
  var extra = !col ? '' : '\ncolumn: ' + col;
  extra += !error ? '' : '\nerror: ' + error;

  // You can view the information in an alert to see things working like this:
  console.error("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);

  // TODO: Report this error via ajax so you can keep track
  //       of what pages have JS issues

  var suppressErrorAlert = true;
  // If you return true, then error alerts (like in older versions of 
  // Internet Explorer) will be suppressed.
  return suppressErrorAlert;
};

window.onunhandledrejection = (e: PromiseRejectionEvent) => {
  console.error(e);
  throw new Error(e.reason.stack);
}

const App: React.FC = () =>{
  //routes.find(this, EmpRoute, "Employee List")
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to="/" className="nav-link">
                TCS Employee Portal
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to="/create-employee" className="nav-link">
                  Create Employee
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/employee-list"} className="nav-link">
                  Employee List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
                  <Switch>
                    {routes.map((route, index)=>{
                        return (
                          <Route
                              key={index}
                              path={route.path}
                              exact={route.exact}
                              render={(props: RouteComponentProps<any>) => (
                                  <route.component
                                      name={route.name}
                                      {...props}
                                      {...route.props}
                                  />
                              )}
                          />
                        );
                    })}
                    {/* <Route exact path='/' component={EmployeeList} />
                    <Route path="/create-employee" component={CreateEmployee} />
                    <Route path="/edit-employee/" component={EditEmployee} />
                    <Route path="/employee-list" component={EmployeeList} />
                    <Route path='*' component = {NotFound}/> */}
                  </Switch>
                  
              
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
