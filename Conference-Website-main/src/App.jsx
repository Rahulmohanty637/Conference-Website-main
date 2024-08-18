/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "../src/pages/Home/Home";
import CallForPapers from "./components/CallForPapers/CallForPapers";
import CallForTutorials from "./components/CallForTutorials/CallForTutorials";

// Component import

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import INternationalTpc from "./components/InternationalTPC/INternationalTpc";
import AuthorGuidelines from "./components/AuthorGuidelines/AuthorGuidelines";
import OrganizingChair from "./components/OrganizingCommittee/OrganizingCommittee";
import Gallery from "./components/SightSeeing/Gallery";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="" element={<Home />} />
        <Route path="/callForPapers" element={<CallForPapers />} />
        <Route path="/callForTutorials" element={<CallForTutorials />} />
        <Route path="/sightseeing" element={<Gallery />} />
        <Route path="/internationaltpc" element={<INternationalTpc />} />
        <Route path="/authorguidelines" element={<AuthorGuidelines />} />
        <Route path="/organizingcommittee" element={<OrganizingChair />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
