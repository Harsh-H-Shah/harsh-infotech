'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';
import { asset } from "@/lib/asset";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url) as { scene: THREE.Group };
  const modelRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!modelRef.current) return;
    modelRef.current.rotation.y += 0.004;
    // Mouse tilt
    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      state.mouse.y * 0.12,
      0.05
    );
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.4}>
      <primitive ref={modelRef} object={scene} scale={1.6} position={[0, -0.5, 0]} />
    </Float>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6366f1" wireframe />
    </mesh>
  );
}

interface Hero3DProps {
  modelUrl?: string;
  height?: string;
  showOrbit?: boolean;
}

export default function Hero3D({ modelUrl = asset("/models/textured.glb"), height = '500px', showOrbit = false }: Hero3DProps) {
  return (
    <div style={{ width: '100%', height, position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#6366f1" />
        <pointLight position={[0, 5, 2]} intensity={0.8} color="#06b6d4" />

        <Suspense fallback={<LoadingFallback />}>
          <Model url={modelUrl} />
          <Environment preset="studio" />
          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.25}
            scale={6}
            blur={2.5}
            far={3}
          />
        </Suspense>

        {showOrbit && <OrbitControls enableZoom={false} enablePan={false} />}
      </Canvas>
    </div>
  );
}

useGLTF.preload(asset("/models/textured.glb"));
