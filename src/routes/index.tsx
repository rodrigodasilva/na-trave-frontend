import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Spinner from "../components/Spinner";

const Home = lazy(() => import("../pages/Home"));
const Match = lazy(() => import("../pages/Match"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner className="mx-auto" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match" element={<Match />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
