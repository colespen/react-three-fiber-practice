import { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Box(props) {
  const ref = useRef();
  const [rotate, setRotate] = useState(false);
  const geometry = useMemo(() => new THREE.BoxGeometry(), []);

  useEffect(() => {
    console.log(ref.current.geometry.uuid);
  });

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * rotate;
    ref.current.rotation.y += 0.5 * delta * rotate;
  });

  return (
    <mesh
      {...props}
      geometry={geometry}
      ref={ref}
      onPointerDown={() => setRotate(!rotate)}>
      <boxGeometry />
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  );
}