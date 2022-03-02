import "./App.css";
import Navbar from "./Components/Navbar";
import FooterMenu from "./Components/FooterMenu";
import ContactForm from "./Components/ContactForm";
import Gallery from "./Components/Gallery";
import ReservationTable from "./Components/ReservationTable";
import Menu from "./Components/Menu";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Menu></Menu>
      <ReservationTable></ReservationTable>
      <Gallery></Gallery>
      <ContactForm />
      <FooterMenu />
    </div>
  );
}

export default App;
