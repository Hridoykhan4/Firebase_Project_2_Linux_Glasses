import { useLoaderData } from "react-router-dom";
import ShowProducts from "../components/ShowProducts";

const Products = () => {
  const glasses = useLoaderData() || [];

  return (
    <div>
      <img src="https://i.ibb.co/4Fm9MgB/image.png" alt="" />
      <ShowProducts name={`All Products`} sunglasses={glasses}></ShowProducts>
    </div>
  );
};

export default Products;
