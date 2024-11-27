import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html center>
      <div className="flex justify-center items-center h-screen">
        <div className="relative flex justify-center items-center">
          <div className="w-24 h-24 border-4 border-[#ffffff] border-opacity-60 border-t-4 rounded-full animate-spin-slow"></div>
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-[#ffffff] rounded-full animate-pulse"></div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
