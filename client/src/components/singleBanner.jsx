/* eslint-disable react/prop-types */
const SingleBanner = ({ bannerimage, heading }) => {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      <div className="bg-[rgba(0,0,0,0.48)] w-full h-full absolute"></div>
      <img
        className="w-full h-full object-cover"
        src={bannerimage}
        alt="noimg"
      />
      <div className="absolute top-[45%] left-[22%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-orange-400 text-[100px] font-extralight sm:text-[50px] sm:text-center">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default SingleBanner;
