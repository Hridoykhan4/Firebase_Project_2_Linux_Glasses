import SingleProducts from "./SingleProducts";

const ShowProducts = ({ name, sunglasses }) => {
  return (
    <div>
      <>
        <div className="px-8 py-12">
          <h1 className="text-3xl font-bold">{name}</h1>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sunglasses.map((item) => (
              <SingleProducts
                discount
                key={item.id}
                product={item}
              ></SingleProducts>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default ShowProducts;
