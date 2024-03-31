// auth.ts
import { queryOptions } from "@tanstack/react-query";
import { CasdoorSDK } from "../Setting";

export type auth = {
  access_token: string;
  token_type: "Bearer";
  refresh_token: string;
  expires_in: number;
  scope: string;
};

export function getToken() {
  return sessionStorage.getItem("access_token");
}

export const authQueryOptions = () =>
  queryOptions({
    queryKey: ["auth"],
    queryFn: () => CasdoorSDK.exchangeForAccessToken(),
  });

export function checkLogin() {
  const token = getToken();
  return token !== undefined && token !== null && token.length > 0;
}
