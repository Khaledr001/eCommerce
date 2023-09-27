const Order = () => {
  const data = [
    {
      id: 112345,
      date: "12/12/2021",
      status: "Delivered",
      total: 1000,
    },
    {
      id: 112346,
      date: "12/12/2021",
      status: "On the way",
      total: 1600,
    },
    {
      id: 112347,
      date: "12/12/2021",
      status: "Delivered",
      total: 2000,
    },
    {
      id: 112348,
      date: "12/12/2021",
      status: "Cancelled",
      total: 100,
    },
    {
      id: 112345,
      date: "12/12/2021",
      status: "Delivered",
      total: 1000,
    },
    {
      id: 112346,
      date: "12/12/2021",
      status: "On the way",
      total: 1600,
    },
    {
      id: 112347,
      date: "12/12/2021",
      status: "Delivered",
      total: 2000,
    },
    {
      id: 112348,
      date: "12/12/2021",
      status: "Cancelled",
      total: 100,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="self-center text-3xl text-orange-500">Your Order</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-300 text-base">
              <th></th>
              <th>ORDER ID</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>TOTAL AMOUNT</th>
              <th>INVOICE</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((item, index) => {
              return (
                <tr key={index} className="hover">
                  <th>{index + 1}</th>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.status}</td>
                  <td>{item.total}</td>
                  <td>
                    {" "}
                    <button className="btn btn-sm btn-outline btn-success">
                      VIEW
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
