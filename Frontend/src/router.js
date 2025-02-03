// Creates all the routes required in application.
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Resume from "./components/viewResume/Resume";
import CreateResume from "./components/createResume/CreateResume";
import UpdateResume from "./components/updateResume/UpdateResume";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/resume/:id" element={<Resume />} />
      <Route path="/create" element={<CreateResume />} />
      <Route path="/update/:id" element={<UpdateResume />} />
    </>
  )
);
