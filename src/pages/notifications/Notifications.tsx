import React, { Component, useEffect } from "react";
import { Row, Col, Table, Card, CardBody, Button } from "reactstrap";
import { activateAuthLayout } from "../../store/actions";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTable } from "mdbreact";

// import BarChart from './HomeCharts/barchart';
// import RecentSaleChart from './HomeCharts/recentSaleChart';
// import CurrentSaleChart from './HomeCharts/currentSaleChart';
// import Radarchart from './HomeCharts/radarchart';

function Notifications() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => ({
    user: state.user,
  }));
  console.log("USERSTAEEEEEEEE", user);
  useEffect(() => {
    dispatch(activateAuthLayout());
  }, []);

  const data = {
    columns: [
      {
        label: "Thong bao",
        field: "nameDoc",
        sort: "dec",
        width: 150,
      },
      {
        label: "Ngay tao",
        field: "date",
        sort: "dec",
        width: 100,
      },
    ],
    rows: [
      {
        nameDoc: "Van ban 1",
        date: "2011/04/25",
      },
      {
        nameDoc: "Van ban 1",
        date: "2011/04/25",
      },
      {
        nameDoc: "Van ban 1",
        date: "2011/04/25",
      },
      {
        nameDoc: "Van ban 1",
        date: "2011/04/25",
      },
      {
        nameDoc: "Van ban 1",
        date: "2011/04/25",
      },
      {
        nameDoc: "Van ban 1",
        date: "2011/04/25",
      },
      {
        nameDoc: "Van ban 1",
        date: "2011/04/25",
      },
      {
        nameDoc: "Van ban 1",
        date: "2011/04/25",
      },
      {
        nameDoc: "Van ban 1",
        date: "2011/04/25",
      },
    ],
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <div className="d-flex justify-content-between">
                <h4 className="card_title">Công việc đã xử lý</h4>
              </div>
              <div className="datatable_container">
                <MDBDataTable responsive bordered data={data} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Notifications;
