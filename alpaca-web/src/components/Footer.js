import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import Logo1 from '../img/logo1.png';
import Logo2 from '../img/logo2.png';

class Footer extends Component{
    
    constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

render() {

    const { width } = this.state;
    const isMobile = width <= 1023;

    if (isMobile) {
      return (
        <div name="footer">
            <div className=" navbar-dark bg-dark" id="footer1">
                <ul className="navbar-nav d-block ml-auto mr-auto text-center">
                    <li id="logo"><img src={Logo1} width="25px" className="mr-sm-2 mr-2"/><img src={Logo2} width="190px" /></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">DESTINATION</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="subTopic" href="#">Cultural<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="subTopic" href="#">Natural</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="subTopic" href="#">Historical</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="subTopic" href="#">Lifestyle</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ABOUT</a>
                    </li>
                </ul>
            </div>
        </div>
      );
    }
    else {
      return (
            <div name="footer">
                <div className=" navbar navbar-expand-lg navbar-dark bg-dark d-block">
                    <ul className="navbar-nav mt-3">
                        <li className="col-2"></li>
                        <li className="nav-item col-1">
                            <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item col-2 col-xl-1 text-right">
                            <a className="nav-link" href="#">DESTINATION</a>
                        </li>
                        <li className="nav-item col-1">
                            <a className="nav-link" href="#">ABOUT</a>
                        </li>
                        <li className="col-2"></li>
                        <li id="logo"><img src={Logo1} width="30px" /><img src={Logo2} width="190px" className="ml-2"/></li>
                    </ul>
                <ul className="navbar-nav mb-3">
                    <li className="col-3"></li>
                    <div className="d-block col-2 col-xl-1 p-xl-0 text-right">
                        <li className="nav-item">
                            <a className="nav-link" id="subTopic" href="#">Cultural<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="subTopic" href="#">Natural</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="subTopic" href="#">Historical</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="subTopic" href="#">Lifestyle</a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
      );
    }
  }
}

export default Footer;
