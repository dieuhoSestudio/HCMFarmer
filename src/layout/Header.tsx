import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
} from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";

import logo from "../assets/images/logo.png";
import author_1 from "../assets/images/author/author-img1.jpg";
import author_2 from "../assets/images/author/author-img2.jpg";
import author_4 from "../assets/images/author/author-img4.jpg";
import user from "../assets/images/user.jpg";
function Header() {
  const [createMenu, setCreateMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false);
  const [notificationMenu, setNotificationMenu] = useState(false);
  const [messagesMenu, setMessageMenu] = useState(false);

  const toggleAction = () => {
    setMenu(!menu);
  };

  const toggleNotification = () => {
    setNotificationMenu(!notificationMenu);
  };

  const toggleMessages = () => {
    setMessageMenu(!messagesMenu);
  };

  const toggleCreate = () => {
    setCreateMenu(!createMenu);
  };

  const sidebarToggle = () => {
    const pageClass = document.querySelector(".page-container");
    pageClass.classList.toggle("sidebar_collapsed");
  };

  //   const toggleFullscreen = () => {
  //     if (
  //       !document.fullscreenElement &&
  //       /* alternative standard method */ !document.mozFullScreenElement &&
  //       !document.webkitFullscreenElement
  //     ) {
  //       // current working methods
  //       if (document.documentElement.requestFullscreen) {
  //         document.documentElement.requestFullscreen();
  //       } else if (document.documentElement.mozRequestFullScreen) {
  //         document.documentElement.mozRequestFullScreen();
  //       } else if (document.documentElement.webkitRequestFullscreen) {
  //         document.documentElement.webkitRequestFullscreen(
  //           Element.ALLOW_KEYBOARD_INPUT
  //         );
  //       }
  //     } else {
  //       if (document.cancelFullScreen) {
  //         document.cancelFullScreen();
  //       } else if (document.mozCancelFullScreen) {
  //         document.mozCancelFullScreen();
  //       } else if (document.webkitCancelFullScreen) {
  //         document.webkitCancelFullScreen();
  //       }
  //     }
  //   };

  return (
    <React.Fragment>
      <div className="header-area">
        <div className="hnd-header-banner">
          <div className="hnd-header-left-1"></div>
          <div className="hnd-header-left-2"></div>
          <div className="hnd-header-left-3"></div>
          <div className="hnd-content">
            <img src={logo} className="hnd-logo-header"></img>
            <span className="h5 text-white text-center hnd-title">
              HỘI NÔNG DÂN VIỆT NAM
              <br />
              <span className="h6 text-white"> THÀNH PHỐ HỒ CHÍ MINH</span>
            </span>
          </div>
        </div>
        <div className="align-items-center hnd-sidebar-header d-flex">
          <div className="mobile-logo d_none_lg">
            <Link to="dashboard">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="col-md-6 d_none_sm d-flex align-items-center justify-content-between">
            <div className="nav-btn pull-left " onClick={sidebarToggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="search-box pull-left search-div">
              <form action="#">
                <i className="ti-search"></i>
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  required
                />
              </form>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 header-sidebar">
            <ul className="notification-area pull-right">
              <li>
                <span
                  className="nav-btn pull-left d_none_lg"
                  onClick={sidebarToggle}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </li>

              <li className="user-dropdown">
                <Dropdown isOpen={menu} toggle={toggleAction} tag="div">
                  <DropdownToggle className="btn dropdown-toggle" tag="div">
                    <img
                      src={user}
                      alt=""
                      className="rounded-circle img-avatar"
                    />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu">
                    <DropdownItem tag="a" href="#">
                      <i className="ti-user"></i> Profile
                    </DropdownItem>
                    <DropdownItem tag="a" href="#">
                      <i className="ti-settings"></i> Account Settings
                    </DropdownItem>
                    <span role="separator" className="divider"></span>
                    <DropdownItem
                      tag="a"
                      className="text-danger"
                      href="/logout"
                    >
                      <i className="ti-power-off"></i>Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>

              <li>
                <div className="name-div">
                  <span className="d_none_sm h5 text-white">
                    Nguyễn Văn Thư
                  </span>
                </div>
              </li>

              <Dropdown
                isOpen={notificationMenu}
                toggle={toggleNotification}
                tag="li"
              >
                <DropdownToggle tag="div" className="">
                  <i className=" ti-bell bell-i"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu bell-notify-box notify-box">
                  <span className="notify-title h5">
                    <i className="ti-bell bell-i-noti  pl-3 pr-4"></i> Bạn có 13
                    thông báo mới
                    {/* <Link to="#">Xem tất cả</Link> */}
                  </span>
                  <Scrollbars style={{ height: "350px" }}>
                    <div className="nofity-list">
                      <DropdownItem tag="a" htef="#" className="notify-item">
                        <div className="notify-thumb">
                          <i className="ti-map-alt bg_blue"></i>
                        </div>
                        <div className="notify-text">
                          <h3 className="text-wrap">
                            Nguyễn Thường Trực đã gửi cho bạn văn bản
                          </h3>
                          <span>Just Now</span>
                        </div>
                      </DropdownItem>
                      <DropdownItem tag="a" htef="#" className="notify-item">
                        <div className="notify-thumb">
                          <i className="ti-bolt-alt bg_warning"></i>
                        </div>
                        <div className="notify-text">
                          <h3 className="text-wrap">
                            Nguyễn Thường Trực đã gửi cho bạn văn bản
                          </h3>
                          <span>30 Seconds ago</span>
                        </div>
                      </DropdownItem>
                      <DropdownItem tag="a" htef="#" className="notify-item">
                        <div className="notify-thumb">
                          <i className="ti-heart bg_danger"></i>
                        </div>
                        <div className="notify-text">
                          <h3 className="text-wrap">
                            Nguyễn Thường Trực đã gửi cho bạn văn bản
                          </h3>

                          <span>Just Now</span>
                        </div>
                      </DropdownItem>
                      <DropdownItem tag="a" htef="#" className="notify-item">
                        <div className="notify-thumb">
                          <i className="ti-comments bg_info"></i>
                        </div>
                        <div className="notify-text">
                          <h3>New Commetns On Post</h3>
                          <span>30 Seconds ago</span>
                        </div>
                      </DropdownItem>
                      <DropdownItem tag="a" htef="#" className="notify-item">
                        <div className="notify-thumb">
                          <i className="ti-settings bg_secondary"></i>
                        </div>
                        <div className="notify-text">
                          <h3>You changed your Settings</h3>
                          <span>Just Now</span>
                        </div>
                      </DropdownItem>
                      <DropdownItem tag="a" htef="#" className="notify-item">
                        <div className="notify-thumb">
                          <i className="ti-image bg_success"></i>
                        </div>
                        <div className="notify-text">
                          <h3>Image Uploaded Successfully</h3>
                          <span>Just Now</span>
                        </div>
                      </DropdownItem>
                    </div>
                  </Scrollbars>
                </DropdownMenu>
              </Dropdown>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
