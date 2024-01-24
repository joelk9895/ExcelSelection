"use client";
import * as THREE from "three";
import { Suspense, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  CameraShake,
  Environment,
  MeshTransmissionMaterial,
  Html,
  ContactShadows,
} from "@react-three/drei";

function Rig() {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
  useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05));
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.5}
      pitchFrequency={0.5}
      rollFrequency={0.5}
    />
  );
}

export default function Model() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 160, 160], fov: 20 }}>
      <fog attach="fog" args={["black", 60, 100]} />
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[50, 50, -30]} castShadow />
        <pointLight position={[-10, -10, -10]} color="red" intensity={3} />
        <pointLight position={[0, -5, 5]} intensity={0.5} />
        <directionalLight position={[0, -5, 0]} color="white" intensity={2} />
        <Environment preset="warehouse" />
        <Rig />

        <mesh receiveShadow castShadow>
          <torusKnotGeometry args={[3, 1, 256, 32]} />
          <MeshTransmissionMaterial
            backside
            backsideThickness={5}
            thickness={2}
            distortionScale={0}
            temporalDistortion={0}
          />
          <ContactShadows
            scale={100}
            position={[0, -7.5, 0]}
            blur={1}
            far={100}
            opacity={0.5}
          />
        </mesh>

        <Html position={[0, 0, 0]} transform>
          <p className="hero-txt">
            Every visionary&apos;s secret sauce to sucess
            <p className="emoji1">😌</p>
            <p className="emoji2">😎</p>
            <p className="emoji3">🤪</p>
          </p>
        </Html>
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  );
}
