import {
  createBrowserRouter,

} from "react-router";
import Portfolio from "../Root/Portfolio/Portfolio";
import ProjectDetails from "../components/Projectdetails/Projectdetails";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio></Portfolio>,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails />,
  },
]);

export default router