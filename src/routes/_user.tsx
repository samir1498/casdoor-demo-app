// src/routes/_user.tsx
import { Navigate, Outlet, createFileRoute } from "@tanstack/react-router";
import { checkLogin } from "../utils/auth";

function UserProtectedRoute() {
  const isLoggedIn = checkLogin();

  if (!isLoggedIn) {
    sessionStorage.setItem("redirect", location.pathname);

    return <Navigate to="/login" search={{ redirect: location.href }} />;
  }
  return <Outlet />;
}
export const Route = createFileRoute("/_user")({
  component: () => <UserProtectedRoute />,
});
