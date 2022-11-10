import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppBar from "@/components/AppBar";
import DefaultLayout from "@/layouts/Default";

import Spinner from "../components/Spinner";
import { AuthGuard } from "./AuthGuard";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Match = lazy(() => import("../pages/Match"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <DefaultLayout header={<AppBar />}>
        <Suspense fallback={<Spinner className="mx-auto" />}>
          <Routes>
            <Route path="/login" element={<AuthGuard element={<Login />} />} />
            <Route path="/" element={<Home />} />
            <Route path="/:date" element={<Home />} />
            <Route path="/match/:id" element={<Match />} />
          </Routes>
        </Suspense>
      </DefaultLayout>
    </BrowserRouter>
  );
}
