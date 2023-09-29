import { useEffect, useState } from "react";
import Axios from "../axios";

function Catagory() {
  const API_URL = import.meta.env.VITE_GET_CATAGORY;

  const initialState = {
    success: false,
    message: "Catagory found",
    payload: {
      catagory: [],
    },
  };

  const [catagorys, setCatagorys] = useState(initialState);

  const getData = async () => {
    try {
      const response = await Axios.get(`${API_URL}`, { withCredentials: true }); 
      const data = response.data;
      // console.log(data);
      
      setCatagorys(data);
    } catch (crror) {
      console.log(crror);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <h1>Category Information</h1> */}
      {catagorys?.payload?.catagory.length > 0 ? (
        catagorys.payload.catagory.map((catagory) => (
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

// const CatagoryCard = (data) => {
//     return (
//         <div>
//             <h1>hello</h1>
//             <h3>{data.slug}</h3>

//         </div>
//     )
// }

export default Catagory;
