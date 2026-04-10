import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import Profile from "./components/Profile/Profile";
import Strengths from "./components/Strengths/Strengths";
import Process from "./components/Process/Process";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Profile />
        <Strengths />
        <Process />
        <Works />
        <Contact />
      </main>
    </>
  );
}

export default App;
