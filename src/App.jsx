import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Center, Environment } from '@react-three/drei';
import { Vector3 } from 'three';
import Button from './Button';

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3();
  useFrame(() => {
    vec.set(mouse.x, mouse.y, camera.position.z);
    camera.position.lerp(vec, 0.025);
  });
}


export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 8] }}>
      <Environment preset="forest" background blur={0.07} />
      <Center>
      {[...Array(5).keys()].map((x) => (
        <Button key={x} position-x={x * 2.5} />
      ))}
      </Center>
      <Rig />
    </Canvas>
  );
}