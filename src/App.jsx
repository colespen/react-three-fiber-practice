import { Stats, OrbitControls, Environment } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls } from 'leva';

function Env() {
  const { height, radius, scale } = useControls('Ground', {
    height: { value: 10, min: 0, max: 100, step: 1 },
    radius: { value: 115, min: 0, max: 1000, step: 1 },
    scale: { value: 100, min: 0, max: 1000, step: 1 },
  });
  return (
    <Environment files="./img/venice_sunset_1k.hdr"
      background
      blur={0}
      ground={{
        height,
        radius,
        scale,
      }}
    />
  );
}

export default function App() {
  const gltf = useLoader(GLTFLoader, './models/scene.glb');

  return (
    <Canvas camera={{ position: [-8, 5, 8] }} >
      <Env />
      {/* <directionalLight position={[9.3, 3.0, 4.4]} intensity={4} /> */}
      <primitive
        object={gltf.scene}
        position={[0, 0, 0]}
      />
      <OrbitControls target={[0, 1, 0]}
        maxPolarAngle={Math.PI / 2}
      />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  );
}