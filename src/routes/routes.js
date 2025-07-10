import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import AppLayout from "../features/AppLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
<Route path="/" element={<Home />} />
<Route path="about" element={<About />} />
<Route path="contact" element={<Contact />} />
    </Route>
  )
);
