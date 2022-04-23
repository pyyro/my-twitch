const AuthPage = () => {
  var response = document.location.hash;
  var access_token = response.substring(14, 44);

  window.localStorage.setItem("access_token", access_token);
  window.location.href = "/followedlive";
  return <>Authenticating...</>;
};

export default AuthPage;
