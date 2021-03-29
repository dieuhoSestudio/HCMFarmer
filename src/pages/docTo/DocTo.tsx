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

function DocTo(props: any) {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => ({
    user: state.user,
  }));
  console.log("USERSTAEEEEEEEE", user);
  useEffect(() => {
    dispatch(activateAuthLayout());
  }, []);

  const toViewDocById = () => {
    props.history.push("/viewDoc");
  };

  const data = {
    columns: [
      {
        label: "Tên văn bản",
        field: "nameDoc",
        sort: "asc",
        width: 150,
      },
      {
        label: "Loai van ban",
        field: "typeDoc",
        sort: "asc",
        width: 270,
      },
      {
        label: "Linh vuc",
        field: "typeField",
        sort: "asc",
        width: 200,
      },
      {
        label: "Can",
        field: "need",
        sort: "asc",
        width: 100,
      },
      {
        label: "Tinh trang",
        field: "status",
        sort: "asc",
        width: 150,
      },
      {
        label: "Ngay tao",
        field: "date",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        nameDoc: "Van ban 1",
        typeDoc: "Van ban nhan su",
        typeField: "Linh vuc nhan su",
        need: "Can xu ly",
        status: <a className="btn tag-table-green">Hoan thanh</a>,
        date: "2011/04/25",
        clickEvent: () => toViewDocById(),
      },
      {
        nameDoc: "Van ban 1",
        typeDoc: "Van ban nhan su",
        typeField: "Linh vuc nhan su",
        need: "Can xu ly",
        status: <a className="btn tag-table-pink">Chua hoan thanh</a>,
        date: "2011/04/25",
        clickEvent: () => toViewDocById(),
      },
      {
        nameDoc: "Van ban 1",
        typeDoc: "Van ban nhan su",
        typeField: "Linh vuc nhan su",
        need: "Can xu ly",
        status: <a className="btn tag-table-green">Hoan thanh</a>,
        date: "2011/04/25",
        clickEvent: () => toViewDocById(),
      },
      {
        nameDoc: "Van ban 1",
        typeDoc: "Van ban nhan su",
        typeField: "Linh vuc nhan su",
        need: "Can xu ly",
        status: <a className="btn tag-table-green">Hoan thanh</a>,
        date: "2011/04/25",
        clickEvent: () => toViewDocById(),
      },
      {
        nameDoc: "Van ban 1",
        typeDoc: "Van ban nhan su",
        typeField: "Linh vuc nhan su",
        need: "Can xu ly",
        status: <a className="btn tag-table-pink">Chua hoan thanh</a>,
        date: "2011/04/25",
        clickEvent: () => toViewDocById(),
      },
      {
        nameDoc: "Van ban 1",
        typeDoc: "Van ban nhan su",
        typeField: "Linh vuc nhan su",
        need: "Can xu ly",
        status: <a className="btn tag-table-green">Hoan thanh</a>,
        date: "2011/04/25",
      },
      {
        nameDoc: "Van ban 1",
        typeDoc: "Van ban nhan su",
        typeField: "Linh vuc nhan su",
        need: "Can xu ly",
        status: <a className="btn tag-table-green">Hoan thanh</a>,
        date: "2011/04/25",
        clickEvent: () => toViewDocById(),
      },
      {
        nameDoc: "Van ban 1",
        typeDoc: "Van ban nhan su",
        typeField: "Linh vuc nhan su",
        need: "Can xu ly",
        status: <a className="btn tag-table-pink">Chua hoan thanh</a>,
        date: "2011/04/25",
        clickEvent: () => toViewDocById(),
      },
      {
        nameDoc: "Van ban 1",
        typeDoc: "Van ban nhan su",
        typeField: "Linh vuc nhan su",
        need: "Can xu ly",
        status: <a className="btn tag-table-green">Hoan thanh</a>,
        date: "2011/04/25",
        clickEvent: () => toViewDocById(),
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
                <h4 className="card_title">Văn bản đến</h4>
                <Link
                  to="/createDocTo"
                  className="btn btn-success btn-table-green mb-3"
                >
                  Thêm văn bản
                </Link>
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

export default withRouter(DocTo);
