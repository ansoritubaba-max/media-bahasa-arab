import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
// HAPUS import MeshStandardMaterial dari '@react-three/drei' karena Anda memakai tag native <meshStandardMaterial>.
// Membiarkan import yang tidak terpakai akan menambah beban bundle size web Anda.
import { Float, Icosahedron } from '@react-three/drei';

function Model() {
  const meshRef = useRef(null);
  
  // OPTIMASI ANIMASI: Menggunakan 'delta' (selisih waktu per frame)
  // Ini jauh lebih mulus (smooth) dan konsisten di berbagai layar HP/Monitor
  // dibandingkan memanggil clock.getElapsedTime() berulang kali setiap milidetik.
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[1, 0]} scale={2}>
        <meshStandardMaterial 
          color="#BF953F" 
          metalness={0.9} 
          roughness={0.1} 
          // wireframe={false} -> Dihapus karena nilai default-nya memang sudah false (Clean Code)
        />
      </Icosahedron>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* 
        OPTIMASI RENDERER:
        1. dpr={[1, 2]} -> Sangat krusial! Membatasi Pixel Ratio di layar HP spesifikasi tinggi (seperti iPhone/Retina) agar GPU tidak kepanasan.
        2. gl={{ antialias: true, alpha: true }} -> Memastikan tepian objek halus tapi latar belakang tetap transparan sempurna.
      */}
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        dpr={[1, 2]} 
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#FCF6BA" />
        <spotLight position={[-5, 5, 5]} intensity={1} color="#BF953F" />
        <Model />
      </Canvas>
    </div>
  );
}