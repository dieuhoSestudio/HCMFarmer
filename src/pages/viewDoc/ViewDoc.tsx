import React, { Component, useEffect } from "react";
import {
  Row,
  Col,
  Table,
  Card,
  CardBody,
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  FormText,
  CustomInput,
  CardSubtitle,
  CardTitle,
  CardText,
  CardHeader,
  CardFooter,
  CardGroup,
} from "reactstrap";
import { activateAuthLayout } from "../../store/actions";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTable, MDBBtn } from "mdbreact";

// import BarChart from './HomeCharts/barchart';
// import RecentSaleChart from './HomeCharts/recentSaleChart';
// import CurrentSaleChart from './HomeCharts/currentSaleChart';
// import Radarchart from './HomeCharts/radarchart';

function ViewDoc() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => ({
    user: state.user,
  }));
  console.log("USERSTAEEEEEEEE", user);
  useEffect(() => {
    dispatch(activateAuthLayout());
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col md="12">
          <Card>
            <CardFooter className="header-doc ">
              <span className="h5">Thong tin van ban</span>
            </CardFooter>
            <CardBody className="border-top border-secondary ">
              <CardGroup className="card-group-doc">
                <Card className="card-first">
                  <CardBody>
                    <CardText className="">
                      <h6>Hanh dong</h6>
                      <span className="ml-4">Can duoc xu ly</span>
                    </CardText>
                    <CardText className="mt-4">
                      <h6>Loai van ban</h6>
                      <span className="ml-4">Van ban nhan su</span>
                    </CardText>
                    <CardText className="mt-4">
                      <h6>Linh vuc</h6>
                      <span className="ml-4">Linh vuc nhan su</span>
                    </CardText>
                  </CardBody>
                </Card>
                <Card className="card-second">
                  <CardBody>
                    <CardText className="">
                      <h6>Do khan cap</h6>
                      <span className="ml-4">Khan cap</span>
                    </CardText>
                    <CardText className="mt-4">
                      <h6>Do bao mat</h6>
                      <span className="ml-4">Bao mat A</span>
                    </CardText>
                    <CardText className="mt-4">
                      <h6>Phuong thuc xu ly</h6>
                      <span className="ml-4">Phuong thuc xu ly A</span>
                    </CardText>
                  </CardBody>
                </Card>
                <Card className="card-third">
                  <CardBody>
                    <CardText className="">
                      <h6>Mo ta</h6>
                      <span className="ml-4">VBD 01 - Xy ly va pha hanh</span>
                    </CardText>
                    <CardText className="mt-4">
                      <h6>Ghi chu</h6>
                      <span className="ml-4">Linh vuc hanh chinh</span>
                    </CardText>
                    <CardText className="mt-4">
                      <h6>Tep dinh kem</h6>
                      <div className="ml-4 px-2 d-flex justify-content-between align-items-center border-span">
                        <span className="">teptin1.pdf</span>
                        <i className="ti-link"></i>
                      </div>
                    </CardText>
                  </CardBody>
                </Card>
              </CardGroup>
            </CardBody>
          </Card>
          <Card>
            <CardFooter className="header-doc border-bottom  border-secondary">
              <span className="h5">Van ban ket qua</span>
            </CardFooter>
            <CardBody>
              <CardGroup>
                <Card>
                  <CardBody>
                    <CardText className="">
                      <h6>Ghi chu</h6>
                      <span className="ml-4">Linh vuc hanh chinh</span>
                    </CardText>
                    <CardText className="mt-4">
                      <h6>Tep dinh kem</h6>
                      <div className="ml-4 px-2 d-flex justify-content-between align-items-center border-span">
                        <span className="">teptin1.pdf</span>
                      </div>
                    </CardText>
                  </CardBody>
                </Card>
              </CardGroup>
            </CardBody>
          </Card>
          <Card>
            <CardFooter className="header-doc  border-bottom  border-secondary">
              <span className="h5">Cac cong viec da giao</span>
            </CardFooter>
            <CardBody>
              <Card>
                <CardGroup className="border-bottom">
                  <CardBody className="d-flex">
                    <img
                      src="/static/media/user.0aca7b9b.jpg"
                      className="rounded-circle img-avatar"
                    />
                    <CardText className="ml-5">
                      <span className="h6 mr-2">Nguyen Thuong Truc</span>
                      <span className="func-title">Dam nhiem chinh</span>
                      <br />
                      <span>VBD 01 - Xy ly va phat hanh</span>
                      <br />

                      <span>23/02/2021 23:27</span>
                    </CardText>
                  </CardBody>
                  <CardBody className="text-tag">
                    <a className="btn tag-table-green">Da hoan thanh</a>
                    <p>Hạn chót: 23/02/2021 13:22</p>
                  </CardBody>
                </CardGroup>
                <CardGroup className="border-bottom border-top">
                  <CardBody className=" d-flex">
                    <img
                      src="/static/media/user.0aca7b9b.jpg"
                      className="rounded-circle img-avatar"
                    />
                    <CardText className="ml-5">
                      <span className="h6 mr-2">Nguyen Thuong Truc</span>
                      <span className="func-title">Dam nhiem chinh</span>
                      <br />
                      <span>VBD 01 - Xy ly va phat hanh</span>
                      <br />

                      <span>23/02/2021 23:27</span>
                    </CardText>
                  </CardBody>
                  <CardBody className="text-tag">
                    <a className="btn tag-table-pink">Chua hoan thanh</a>
                    <p>Hạn chót: 23/02/2021 13:22</p>
                  </CardBody>
                </CardGroup>
              </Card>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-right">
              <button
                type="button"
                className="btn btn-success btn-table-green mr-3"
              >
                Phat hanh
              </button>
              <button
                type="button"
                className="btn btn-success btn-table-green ml-3"
              >
                Quay lai
              </button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default ViewDoc;
