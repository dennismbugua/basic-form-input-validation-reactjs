import "./App.css";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import CreatePostPage from "./pages/CreatePostPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/create">
            <CreatePostPage />
          </Route>
          <Route path="/page">
            <PostPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
