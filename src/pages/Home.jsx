import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ShowProducts from "../components/ShowProducts";

const Home = () => {
  const sunglasses = useLoaderData() || [];

  return (
    <div>
      <Banner></Banner>
      <ShowProducts
        name="Top Rated"
        sunglasses={sunglasses.slice(1, 9)}
      ></ShowProducts>
      <ShowProducts
        name={"Best sellers"}
        sunglasses={sunglasses.slice(10, 18)}
      />

      <div className="flex justify-center py-6">
        <Link to="/products" className="flex items-center   justify-center min-w-[140px] max-w-full p-[3px] rounded-lg border-0 cursor-pointer select-none transition-all duration-300 shadow-[0_15px_30px_-5px_rgba(151,65,252,0.2)] bg-[linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)]">
          <span className="w-full h-full px-6 py-4 text-white text-[18px] leading-[1em] whitespace-nowrap rounded-md bg-[rgb(5,6,45)] transition duration-300 group-hover:bg-transparent">
            Show All Products
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
