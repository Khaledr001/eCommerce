/* eslint-disable react-hooks/exhaustive-deps */
// import Axios from "../axios";
// import { useQuery } from "react-query";
import { useGetAllCatagory } from "../hooks/useCatagory";

function Catagory() {
  
  const { data } = useGetAllCatagory();
  const catagorys = data?.data.payload;
  // console.log(catagorys);

  return (
    <>
      {catagorys?.catagory.length > 0 ? (
        catagorys?.catagory.map((catagory) => (
          <li className="text-left" key={catagory._id}>
            {" "}
            <a href="">{catagory.catagoryName}</a>{" "}
          </li>
        ))
      ) : (
        <h1>No Catagory Found</h1>
      )}
    </>
  );
}

export default Catagory;
