export function correctLogin(message, setToken) {
  window.location.pathname = "/";
  setToken((message));
}
