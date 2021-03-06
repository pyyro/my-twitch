import '../styles/Login.css'

const Login = () => {

  var REDIRECT_URI

  if(process.env.NODE_ENV === "production"){
    REDIRECT_URI = "https://my-twitch-nabin.netlify.app/auth/"
  }else(
    REDIRECT_URI = "http://localhost:3000/auth/"
  )

  var url = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user:read:follows`;

  const loginWithTwitch = () => {
    window.location.href = url;
  };

  return (
    <div className="container">
      
    <p className="greeting">
      Twitch homepage is too bloated and laggy so I made my own.
      I would also recommend using <a href="https://chrome.google.com/webstore/detail/alternate-player-for-twit/bhplkbgoehhhddaoolmakpocnenplmhf?hl=en" target="_blank">Alternative Player for Twitch.tv</a>
    </p>
    
    <button type="button" className="btn" style={{backgroundColor: "#9146fe", color: "white"}} onClick={loginWithTwitch}>
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.96em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 268"><path fill="#5A3E85" d="M17.458 0L0 46.556v186.201h63.983v34.934h34.931l34.898-34.934h52.36L256 162.954V0H17.458Zm23.259 23.263H232.73v128.029l-40.739 40.741H128L93.113 226.92v-34.886H40.717V23.263Zm64.008 116.405H128V69.844h-23.275v69.824Zm63.997 0h23.27V69.844h-23.27v69.824Z"/></svg>Login with Twitch
    </button>
    <p className="greeting">
      App name on twitch authorization page will show WhoIsLive123.
    </p>
    </div>
  );
};

export default Login;
