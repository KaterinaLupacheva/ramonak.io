export default function Portfolio() {
  return (
    <div className="w-full bg-white pt-24 flex justify-center bg-gradient-to-r from-[#F2F4F7] to-[#FFFFFF]">
      <div className="max-w-[53%] flex flex-col items-center text-center">
        <h3 className="text-indigo-600 text-base font-semibold">Portfolio</h3>
        <p className="text-gray-900 text-5xl font-semibold font-['Inter'] py-4">
          I create awesome digital products
        </p>
        <p className=" text-gray-500 text-xl font-normal font-['Inter']">
          I am focused on creating beautiful and user friendly applications
          while writing clean code.
        </p>
        <button className="bg-indigo-600 text-white text-lg font-semibold rounded-lg px-8 py-3 mt-8">
          See all works {"->"}
        </button>
      </div>
    </div>
  );
}
