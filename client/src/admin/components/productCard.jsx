import { MdEdit } from "react-icons/md";

const ProductCard = ({ product }) => {
  const imgPath = `http://localhost:6001${product.image}`;
  console.log(imgPath);
  return (
    <div className="w-[245px] bg-base-200 shadow-2xl grid gap-2 p-5 rounded-md hover:scale-105 transition">
      <div className="">
        <img
          className="overflow-hidden rounded-lg h-[200px] w-[230px]"
          src={imgPath}
          alt="product image"
        />
      </div>
      <div>
        <p className="text-xl font-semibold mt-2">{product.name} </p>
      </div>
      <div>
        <p className="text-lg font-semibold text-success">
          Available : {product.quantity}{" "}
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold text-info">
          Already Sold : {product.sold}{" "}
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold ">Price : {product.price} </p>
      </div>

      <div className="flex justify-between mt-2">
        <div className="btn h-10 w-[90px] btn-sm btn-info btn-outline rounded-3xl">
          <MdEdit />
          <span>Edit</span>
        </div>
        <div className="btn h-10 w-[90px] btn-sm btn-error btn-outline rounded-3xl">
          delete
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
