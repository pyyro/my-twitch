import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FollowedLive from "./views/FollowedLive";
import TopStreams from "./views/TopStreams";
import TopGames from "./views/TopGames";
import Login from "./views/Login";
import AuthPage from "./views/AuthPage";
import { useEffect, useState } from "react";
import TopStreamsForGame from "./views/TopStreamsForGame";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    var token = window.localStorage.getItem("access_token");

    if (token !== null) {
      setUser(true);
    }
  }, []);

  return (
    <Router>
      <Layout user={user} setUser={setUser}>
        <Routes>
          <Route path="/" element={user ? <FollowedLive /> : <Login />} />
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          <Route
            path="/followedlive"
            element={user ? <FollowedLive /> : <Login />}
          />
          <Route
            path="/topstreams"
            element={user ? <TopStreams /> : <Login />}
          />
          <Route path="/allgames" element={user ? <TopGames /> : <Login />} />
          <Route path="/allgames/:gamename" element={user ? <TopStreamsForGame /> : <Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
