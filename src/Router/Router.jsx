import {
  createBrowserRouter,

} from "react-router";
import Portfolio from "../Root/Portfolio/Portfolio";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio></Portfolio>,
  },
]);

export default router