'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { Float, Stars } from '@react-three/drei';

function NetworkNode({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const targetX = (state.mouse.x * Math.PI) / 4;
    const targetY = (state.mouse.y * Math.PI) / 4;
    meshRef.current.rotation.y += 0.02 * (targetX - meshRef.current.rotation.y);
    meshRef.current.rotation.x += 0.02 * (targetY - meshRef.current.rotation.x);
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
        {/* Octahedron represents a Network Node/Server */}
        <octahedronGeometry args={[2.2, 0]} />
        <meshStandardMaterial
          color={hovered ? "#3B82F6" : "#ffffff"} // Blue on hover, White default
          wireframe={true}
          transparent
          opacity={0.3}
          roughness={0}
          metalness={1}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  const mouse = useRef<[number, number]>([0, 0]);

  return (
    <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-60 md:opacity-100 pointer-events-none md:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#3B82F6" />
        <NetworkNode mouse={mouse} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}