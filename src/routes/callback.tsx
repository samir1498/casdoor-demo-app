// callback.tsx
import { Navigate, createFileRoute } from "@tanstack/react-router";
import { authQueryOptions } from "../utils/auth";

export const AuthCallback = () => {
  const auth = Route.useLoaderData();
  if (auth.access_token) {
    sessionStorage.setItem("access_token", auth.access_token);
  }

  return (
    auth.access_token && (
      <Navigate to={sessionStorage.getItem("redirect") ?? "/"} />
    )
  );
};

export const Route = createFileRoute("/callback")({
  component: AuthCallback,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(authQueryOptions()),
});
