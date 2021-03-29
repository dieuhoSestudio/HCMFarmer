import React, { useEffect } from "react";
import MetisMenu from "metismenujs";
import { Link, withRouter, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
function Sidebar(props: any) {
  const location = useLocation();
  useEffect(() => {
    new MetisMenu("#menu", {});

    var matchingMenuItem = null;
    var ul = document.getElementById("menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, []);
  const activateParentDropdown = (item: any) => {
    item.classList.add("mm-active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("mm-active"); // li
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");
        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("active");
          }
        }
      }
      return false;
    }
  };
  return (
    <React.Fragment>
      <div className="left side-menu">
        <div className="sidebar-menu ">
          {/* <div className="sidebar-header ">
            <div className="logo">
              <a href="index.html">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          </div>
        */}
          <div className="main-menu ">
            <div className="menu-inner" id="sidebar_menu">
              <nav>
                <ul className="metismenu  " id="menu">
                  <li>
                    <Link to="/dashboard">
                      <span>Trang chủ</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <span>Văn bản</span>
                    </Link>
                    <ul className="submenu" id="submenu1">
                      <li>
                        <Link to="/docTo">
                          <span> Văn bản đến</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/docFrom">
                          <span>Văn bản đi</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>Văn bản nội bộ</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="#">
                      <span>Công việc</span>
                    </Link>
                    <ul className="submenu" id="submenu2">
                      <li>
                        <Link to="/allWorks">
                          <span>Tất cả công việc</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/worksNotDone">
                          <span>Công việc cần xử lý</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/worksDone">
                          <span>Công việc đã xử lý </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/notifications">
                          <span>Thông báo</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/releasedDoc">
                          <span> Phát hành</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
