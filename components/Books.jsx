import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/magic_book/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.01} />
    </>
  );
};

const Books = () => {
  return(
    <>

    <div className="globe">
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Suspense fallback={null}>
        <Model />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
    </div>
    </>
    )
}

export default Books;