/* <%= pkg %> <%= version %> */
import { urljoin as _u, loadable } from "utils/index.js";

import MODULE_URLS from "./urls";

const moduleName = "app.<%= lower %>";

export default [
  {
    path: MODULE_URLS.HOME,
    component: loadable(() =>
      import(/* webpackChunkName: `app.<%= lower %>` */ "./pages/Home.js")
    ),
    exact: true
  }

  /*
  {
    path     :MODULE_URLS.LOGOUT,
    component:Logout,
    private  :true,
    //test:(user) => user.id
  },
  */
];
