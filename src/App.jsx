import "./App.css";
import { TwitterFollowCards } from "./TwitterFollowCard";

export function App() {
  return (
    <>
      <TwitterFollowCards
        userName="michael"
        name="michael yordas"
        initialIsFollowing = {true}
      ></TwitterFollowCards>
      <TwitterFollowCards
        userName="rodrigo"
        name="rodrigo vergas"
      ></TwitterFollowCards>
    </>
  );
}
