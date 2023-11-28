export const HomeSectionCart = ({product}) => {
  return (
    <>
      <div className=" cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg my-4 border-gray-300 border-solid border-2 overflow-hidden w-[15rem] mx-3">
        <div className="h-[13rem] w-[10rem]">
          <img
            className="object-cover object-top w-full h-full"
            src={product.imageUrl}
            alt=""
          />
        </div>
        <div className="p-4">
            <h3 className="text-lg font-medium text-gray-800">{product.brand}</h3>
            <p className="mt-2 text-sm text-gray-500">{product.title}</p>
        </div>
      </div>
    </>
  );
};
