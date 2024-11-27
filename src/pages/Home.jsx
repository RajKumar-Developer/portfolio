/* eslint-disable react/no-unknown-property */
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Room from "../models/Room";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [mouseX, setMouseX] = useState(0);
  const [roomX, setRoomX] = useState(0);
  const [isMouseIdle, setIsMouseIdle] = useState(true);
  const [isInteractingWithInfo, setIsInteractingWithInfo] = useState(false); // New state

  const adjustRoomForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-1, -6, -40];
    let rotation = [0.2, 5.2, 0];
    if (window.innerWidth < 768) {
      screenScale = [5, 5, 5];
    } else {
      screenScale = [6.5, 6.8, 6];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [roomScale, roomPosition, roomRotation] = adjustRoomForScreenSize();

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isInteractingWithInfo) return; // Ignore mouse movement if interacting with HomeInfo
      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
      setMouseX(normalizedX);
      setIsMouseIdle(false);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isInteractingWithInfo]);

  useEffect(() => {
    const targetX = mouseX * 10;
    const smoothTransition = () => {
      setRoomX((prev) => prev + (targetX - prev) * 0.1);
    };
    const animationFrame = requestAnimationFrame(smoothTransition);
    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, roomX]);

  useEffect(() => {
    let idleTimeout;

    const resetIdleTimer = () => {
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => setIsMouseIdle(true), 1000);
    };

    resetIdleTimer();

    const handleMouseActivity = () => {
      resetIdleTimer();
    };

    window.addEventListener("mousemove", handleMouseActivity);

    return () => {
      clearTimeout(idleTimeout);
      window.removeEventListener("mousemove", handleMouseActivity);
    };
  }, []);

  return (
    <section className="w-full h-screen relative bg-violet-600">
      <div
        className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center"
        onMouseEnter={() => setIsInteractingWithInfo(true)} // Disable mouse tracking
        onMouseLeave={() => setIsInteractingWithInfo(false)} // Enable mouse tracking
      >
        {isMouseIdle && <HomeInfo />}
      </div>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[0.5, 0.5, 0]} intensity={2} />
          <ambientLight intensity={0.8} />
          <hemisphereLight skyColor="#216e8f" groundColor="#000000" intensity={2} />

          <Room
            position={[roomX, roomPosition[1], roomPosition[2]]}
            scale={roomScale}
            rotation={roomRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
