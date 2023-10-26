import EatonLogoWithout from "../assets/img/EatonLogoWithout.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-14 mb-0 w-full">
        <div>
          <div className="cursor-pointer w-full">
            <div
              className={`group flex items-center justify-center relative h-full rounded-xl transition duration-300 ease-in-out`}
            >
              <div
                className={`absolute top-8 right-3 w-[11.1em] h-[3.9em] bg-[#157CC4] transition-transform duration-300 ease-in-out transform translate-x-[0em] group-hover:translate-x-[-11.1em] rounded-md`}
              ></div>
              <h1 className="text-[#157CC4] text-[4em] font-abc font-semibold text-center z-10 duration-300 ease-in-out group-hover:text-white">
                AQUA
              </h1>
              <h1 className="text-white text-[4em] font-abc font-semibold m-5 text-center z-10 duration-300 ease-in-out group-hover:text-[#157CC4]">
                SYNC
              </h1>
            </div>
          </div>
          <p className="text-center text-lg">
            Connecting Your Life with the Ideal Water.
          </p>
        </div>
      </div>
      <div className="flex gap-3 justify-end p-10">
        <h1 className="font-bold text-lg font-abc">By</h1>
        <img src={EatonLogoWithout} className="w-[10em] h-[2em] mt-4" alt="" />
      </div>
    </>
  );
};

export default Home;
