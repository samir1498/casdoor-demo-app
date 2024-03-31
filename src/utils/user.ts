// user.ts
import { queryOptions } from "@tanstack/react-query";
import { CasdoorSDK } from "../Setting";
export interface User {
  aud: string;
  iss: string;
  name: string;
  picture?: string; // Optional property
  preferred_username: string;
  sub: string;
  roles: string[];
}
export interface Userinfo extends Response {
  aud: string;
  iss: string;
  name: string;
  picture?: string; // Optional property
  preferred_username: string;
  sub: string;
  roles: string[];
}

export const userQueryOptions = (token: string) =>
  queryOptions({
    queryKey: ["user"],
    queryFn: async () => await getUserInfo(token),
  });

export async function getUserInfo(
  token: string
): Promise<Userinfo | undefined> {
  return (await CasdoorSDK.getUserInfo(token)) as Userinfo;
}
