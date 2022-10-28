import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Spinner from "../components/Spinner";

const Home = lazy(() => import("../pages/Home"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner className="mx-auto" />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
