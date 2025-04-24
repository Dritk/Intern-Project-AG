const ChartCard = () => {
  return (
    <div className="flex flex-col">
      <p>Supplier Likes Graph Analysis</p>
      <hr className="my-4" />
      <div className="flex flex-row gap-x-16">
        <p className="">S/N</p>
        <p>Supplier Details</p>
        <p className="mx-20">UserList</p>
      </div>
      <hr className="my-4 flex " />
      <div className="flex justify-center mt-8 ">
        <img src="./Empty-product.png" alt="Empty Product" className="w-48" />
      </div>
      <p className="flex justify-center mt-2 opacity-50">
        No Suppliers are liked by users during this period.
      </p>
    </div>
  );
};

export default ChartCard;
