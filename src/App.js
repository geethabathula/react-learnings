// import Counter from "./useState/Counter";
// import Name from "./useState/Name";
// import Form from "./useState/Form";
// import AddtoList from "./useState/AddtoList";
// import Counter from "./useEffect/Counter";
// import UsersAPi from "./useEffect/UsersAPi";
// import Cocktail from "./useEffect/Cocktail";
// import C from "./useContext/C";
// import Users from "./useReducer/Users";
// import UsersFromAPI from "./useReducer/UsersFromAPI";
// import InputFocus from "./useRef/InputFocus";
// import ChangeTheme from "./useMemo/ChangeTheme";
// import ParentComp from "./useCallback/ParentComp";
// import Counter1 from "./customhook/Counter1";
// import Counter2 from "./customhook/Counter2";
import { Route, Routes } from "react-router-dom";
import Navbar from "./ReactRouterDomExample/Navbar";
import HomePage from "./ReactRouterDomExample/HomePage";
import AboutPage from "./ReactRouterDomExample/AboutPage";
import ContactUsPage from "./ReactRouterDomExample/ContactUsPage";
import ClickMe from "./ReactRouterDomExample/ClickMe";
import NotFound from "./ReactRouterDomExample/NotFound";
import Projects from "./ReactRouterDomExample/Projects";
import FeaturedProjects from "./ReactRouterDomExample/FeaturedProjects";
import LiveProjects from "./ReactRouterDomExample/LiveProjects";
import Users from "./ReactRouterDomExample/Users";
import UserDetails from "./ReactRouterDomExample/UserDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/clickme" element={<ClickMe />} />
        {/* * means if any path is not matched it renders that particular component */}
        <Route path="*" element={<NotFound />} />
        <Route path="/projects" element={<Projects />}>
          <Route index element={<FeaturedProjects />} />
          <Route path="featured" element={<FeaturedProjects />} />
          <Route path="live" element={<LiveProjects />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
