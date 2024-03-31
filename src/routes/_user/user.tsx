// src/routes/_user/user.tsx
import { createFileRoute } from "@tanstack/react-router";
import { getToken } from "../../utils/auth";
import { getUserInfo } from "../../utils/user";
export const Route = createFileRoute("/_user/user")({
  component: Index,
  loader: async () => {
    try {
      const token =  getToken();

      const res = await getUserInfo(token ?? "");
      console.log(res);
      if (res?.name) {
        return res.name;
      } else {
        console.warn("Missing 'name' property in userinfo response");
      }
    } catch (error) {
      console.error("Error fetching userinfo:", error);
    }
  },
});

function Index() {
  const user = Route.useLoaderData();
  return (
    <div className="p-2">
      <h3>Welcome {user}</h3>
    </div>
  );
}
