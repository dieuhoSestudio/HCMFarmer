// ------ Auth Pages -------
import Pageslogin from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

// import ForgetPassword from './pages/Auth/ForgetPassword';
// import LockScreen from './pages/Auth/Lock';
// import ResetPassword from './pages/Auth/ResetPassword';
import Logout from "./pages/Auth/Logout";
import DocTo from "./pages/docTo/DocTo";
import CreateDocTo from "./pages/createDocTo/CreateDocTo";
import DocFrom from "pages/docFrom/DocFrom";
import AllWorks from "pages/allWorks/AllWorks";
import WorksNotDone from "pages/worksNotDone/worksNotDone";
import WorksDone from "pages/worksDone/WorksDone";
import Notifications from "pages/notifications/Notifications";
import ReleasedDoc from "pages/releasedDoc/ReleasedDoc";
import CreateDocFrom from "pages/createDocFrom/CreateDocFrom";
import ViewDoc from "pages/viewDoc/ViewDoc";

const routes = [
  //=====================================
  //            Public Routes
  //=====================================
  { path: "/login", component: Pageslogin, ispublic: true },
  { path: "/logout", component: Logout, ispublic: true },
  // { path: '/register', component: Pagesregister, ispublic: true },
  // { path: '/forget-password', component: ForgetPassword, ispublic: true },
  // { path: '/lock', component: LockScreen, ispublic: true },
  // { path: '/reset-password', component: ResetPassword, ispublic: true },
  //=====================================
  //            Dashboard
  //=====================================
  { path: "/dashboard", component: Dashboard },
  { path: "/docTo", component: DocTo },
  { path: "/createDocTo", component: CreateDocTo },
  { path: "/docFrom", component: DocFrom },
  { path: "/allWorks", component: AllWorks },
  { path: "/worksNotDone", component: WorksNotDone },
  { path: "/worksDone", component: WorksDone },
  { path: "/notifications", component: Notifications },
  { path: "/releasedDoc", component: ReleasedDoc },
  { path: "/createDocFrom", component: CreateDocFrom },
  { path: "/viewDoc", component: ViewDoc },
];

export default routes;
