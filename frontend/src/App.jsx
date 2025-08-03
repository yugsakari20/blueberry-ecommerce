import Banner from "./components/Banner";
import CardSection from "./components/CardSection";
import Categories from "./components/Categories";
import DealSection from "./components/DealSection";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Categories />
      <DealSection />
      <CardSection />
      <Banner />
    </div>
  );
}

export default App;
