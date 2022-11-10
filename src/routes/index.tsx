import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppBar from "@/components/AppBar";
import DefaultLayout from "@/layouts/Default";

import Spinner from "../components/Spinner";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Match = lazy(() => import("../pages/Match"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <DefaultLayout header={<AppBar />}>
        <Suspense fallback={<Spinner className="mx-auto" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:date" element={<Home />} />
            <Route path="/match/:id" element={<Match />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </DefaultLayout>
    </BrowserRouter>
  );
}
