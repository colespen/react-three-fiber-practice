import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Center, Environment } from '@react-three/drei';
import { Vector3 } from 'three';
import Button from './Button';

function Rig() {
  const { camera, mouse } = useThree();
  console.log(camera);
  const vec = new Vector3();
  useFrame(() => {
    vec.set(mouse.x, mouse.y, camera.position.z);
    camera.position.lerp(vec, 0.025);
    camera.lookAt(0, 0, 0);
  });
}


export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 9] }}>
      <Environment preset="forest" background blur={0.07} />
      <Center>
        {[...Array(5).keys()].map((x) =>
          [...Array(3).keys()].map((y) => (
            <Button key={x + y * 5} position={[x * 2.5, y * 2.5, 0]} />
          ))
        )}
      </Center>
      <Rig />
    </Canvas>
  );
}