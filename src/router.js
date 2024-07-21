import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";

export const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Home />}/>
    <Route path="/resume/:id" element={<Resume />}/>
  </>
))