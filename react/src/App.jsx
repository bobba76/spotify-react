import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

var SpotifyWebApi = import("spotify-web-api-node");

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: "83b22e9984dd4eb191fa62637acaeffe",
  clientSecret: "83cd765baebc4e238794797f04326166",
  redirectUri: "https://localhost:5173",
});

function App() {
  spotifyApi
    .getMySavedTracks({
      limit: 1,
      offset: 0,
    })
    .then(
      function (data) {
        console.log("Done!");
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );

  return <div className="App"></div>;
}

export default App;
