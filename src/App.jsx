import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/common/LoadingSpinner";
import NotFound from "./components/pages/NotFound";

// Lazy load pages for better performance
const Home = lazy(() => import("./components/pages/Home"));
const AboutUs = lazy(() => import("./components/pages/AboutUs"));
const Portfolio = lazy(() => import("./components/pages/Portfolio"));
const Contact = lazy(() => import("./components/pages/Contact"));
const Privacy = lazy(() => import("./components/pages/Privacy"));
const Terms = lazy(() => import("./components/pages/Terms"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
