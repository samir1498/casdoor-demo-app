import { createFileRoute, useSearch } from "@tanstack/react-router";

import * as Setting from "../Setting";

const Login = () => {
  const login = () => {
    Setting.CasdoorSDK.signin_redirect();
  };
  const { error }: { error?: string } = useSearch({ from: "/login" });

  return (
    <div
      style={{
        textAlign: "center",
        alignItems: "center",
      }}
    >
      {error && (
        <p style={{ color: "red", fontWeight: "bold", fontSize: 30 }}>
          {error}
        </p>
      )}
      <button onClick={login} style={{ fontSize: 30 }}>
        Casdoor Login
      </button>
    </div>
  );
};

export const Route = createFileRoute("/login")({
  component: Login,
});
