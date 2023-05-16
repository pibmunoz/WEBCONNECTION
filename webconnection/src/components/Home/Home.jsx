import Banner from "../Banner/Banner";
import NavBar from "../Navbar/NavBar";
import Products from "../Products/Products";
import "../Products/Products.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <br />
      <div className="grid-container">
        <Products />
      </div>
    </>
  );
};

export default Home;
