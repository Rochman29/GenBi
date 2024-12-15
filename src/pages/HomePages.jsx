import "../App.css";
import Home from "../components/Home";
import DaftarIsi from "../components/DaftarIsi";
import Footer from "../components/Footer";

function HomePages() {
  return (
    <div className="bg-[#fbf5db] min-h-screen w-full">
      <Home />
      <DaftarIsi />
      <Footer />
    </div>
  );
}
export default HomePages;
