import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Box(props) {
  const ref = useRef();
  const keyMap = props.keyMap
  const [selected, setSelected] = useState(props.selected);


  useFrame((_, delta) => {
    if (selected) {
      keyMap['KeyA'] && (ref.current.position.x -= 3 * delta);
      keyMap['KeyD'] && (ref.current.position.x += 3 * delta);
      keyMap['KeyW'] && (ref.current.position.z -= 3 * delta);
      keyMap['KeyS'] && (ref.current.position.z += 3 * delta);
      keyMap['ArrowUp'] && (ref.current.position.y += 3 * delta);
      keyMap['ArrowDown'] && (ref.current.position.y -= 3 * delta);
    }
  });

  return (
    <mesh ref={ref} {...props} onPointerDown={() => setSelected(!selected)}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={!selected} />
    </mesh>
  );
}