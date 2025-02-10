import { request } from "./api";

const baseUrl = "http://localhost:3001";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export function onRegister(name, email, password, avatar) {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password, name, avatar }),
  });
}

export function onLogin(email, password) {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password }),
  });
}

export function checkToken(token) {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}
