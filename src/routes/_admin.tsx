// src/routes/_admin.tsx
import { Navigate, Outlet, createFileRoute } from "@tanstack/react-router";

import { userQueryOptions } from "../utils/user";
import { checkLogin, getToken } from "../utils/auth";

function AdminProtectedRoute() {
  const isLoggedIn = checkLogin();
  const user = Route.useLoaderData();

  const isAdmin = user?.roles?.includes("admin");

  if (!isLoggedIn || !isAdmin) {
    sessionStorage.setItem("redirect", location.pathname);

    return (
      <Navigate
        to="/login"
        search={{ redirect: location.href, error: "Not authorized" }}
      />
    );
  }
  return <Outlet />;
}
export const Route = createFileRoute("/_admin")({
  component: () => <AdminProtectedRoute />,
  loader: async ({ context }) => {
    const token = getToken();
    const user = await context.queryClient.ensureQueryData(
      userQueryOptions(token ?? "")
    );

    return user;
  },
});
