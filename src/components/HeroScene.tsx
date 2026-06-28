import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function TattooMachine() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]} scale={1.5}>
      {/* Main body - cylindrical tattoo machine */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.18, 1.8, 32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.95}
          roughness={0.1}
        />
      </mesh>

      {/* Chrome grip section */}
      <mesh position={[0, -0.6, 0]} castShadow>
        <cylinderGeometry args={[0.17, 0.17, 0.6, 32]} />
        <meshStandardMaterial
          color="#4a4a4a"
          metalness={1}
          roughness={0.05}
        />
      </mesh>

      {/* Grip texture rings */}
      {[-0.75, -0.65, -0.55, -0.45].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} castShadow>
          <torusGeometry args={[0.18, 0.01, 16, 32]} />
          <meshStandardMaterial
            color="#5a5a5a"
            metalness={1}
            roughness={0}
          />
        </mesh>
      ))}

      {/* Needle armature bar */}
      <mesh position={[0, 0.95, 0]} castShadow>
        <boxGeometry args={[0.08, 0.3, 0.04]} />
        <meshStandardMaterial
          color="#3a3a3a"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Needle assembly - top part */}
      <mesh position={[0, 1.15, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.06, 0.25, 16]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={1}
          roughness={0.1}
        />
      </mesh>

      {/* Needle tip */}
      <mesh position={[0, 1.35, 0]} castShadow>
        <cylinderGeometry args={[0.008, 0.008, 0.2, 8]} />
        <meshStandardMaterial
          color="#e0e0e0"
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Coil 1 */}
      <mesh position={[0.12, -0.1, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.5, 16]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Coil 2 */}
      <mesh position={[-0.12, -0.1, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.5, 16]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Coil tops (copper colored) */}
      <mesh position={[0.12, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.06, 0.08, 16]} />
        <meshStandardMaterial
          color="#b87333"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[-0.12, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.06, 0.08, 16]} />
        <meshStandardMaterial
          color="#b87333"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Frame - yoke */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[0.35, 0.08, 0.12]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.95}
          roughness={0.1}
        />
      </mesh>

      {/* Contact screw */}
      <mesh position={[0.15, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.015, 0.02, 0.15, 12]} />
        <meshStandardMaterial
          color="#c0c0c0"
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Capacitor */}
      <mesh position={[0, 0.3, 0.12]} castShadow>
        <boxGeometry args={[0.12, 0.06, 0.04]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* RCA connector */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
        <meshStandardMaterial
          color="#3a3a3a"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Tube vice */}
      <mesh position={[0, 1.0, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.1, 0.12, 16]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={1}
          roughness={0.1}
        />
      </mesh>

      {/* Decorative screws */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(angle) * 0.16,
            0.7,
            Math.sin(angle) * 0.16,
          ]}
          rotation={[0, -angle, 0]}
          castShadow
        >
          <cylinderGeometry args={[0.01, 0.01, 0.03, 6]} />
          <meshStandardMaterial
            color="#606060"
            metalness={1}
            roughness={0}
          />
        </mesh>
      ))}
    </group>
  );
}

function InkBottle() {
  const bottle = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (bottle.current) {
      bottle.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={bottle} position={[2, -0.5, -1]}>
      {/* Bottle body */}
      <mesh castShadow>
        <cylinderGeometry args={[0.25, 0.3, 0.8, 32]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.1}
          roughness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Bottle cap */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.2, 32]} />
        <meshStandardMaterial
          color="#8b0000"
          metalness={0.3}
          roughness={0.5}
        />
      </mesh>

      {/* Label */}
      <mesh position={[0, 0, 0.31]} castShadow>
        <planeGeometry args={[0.4, 0.3]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0}
          roughness={0.8}
        />
      </mesh>
    </group>
  );
}

function InkDrops() {
  const drops = useMemo(() => {
    return Array.from({ length: 15 }, () => ({
      position: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 3 - 1,
      ],
      scale: Math.random() * 0.08 + 0.03,
    }));
  }, []);

  return (
    <>
      {drops.map((drop, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={drop.position as [number, number, number]} scale={drop.scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color="#0a0a0a"
              metalness={0.3}
              roughness={0}
              transparent
              opacity={0.9}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function FloatingNeedles() {
  return (
    <>
      {[
        { pos: [-2, 0.5, -1], scale: 0.8 },
        { pos: [2.5, -0.3, -1.5], scale: 0.6 },
        { pos: [-1.5, -0.8, -2], scale: 0.5 },
        { pos: [1.8, 0.8, -2.5], scale: 0.7 },
      ].map((n, i) => (
        <Float key={i} speed={1.5} rotationIntensity={1} floatIntensity={1}>
          <group position={n.pos as [number, number, number]} scale={n.scale}>
            <mesh rotation={[0, 0, Math.PI / 4 + i * 0.2]} castShadow>
              <cylinderGeometry args={[0.015, 0.015, 2, 8]} />
              <meshStandardMaterial
                color="#c0c0c0"
                metalness={1}
                roughness={0}
              />
            </mesh>
            <mesh position={[0, 1.1, 0]} castShadow>
              <coneGeometry args={[0.04, 0.2, 8]} />
              <meshStandardMaterial
                color="#a0a0a0"
                metalness={1}
                roughness={0}
              />
            </mesh>
          </group>
        </Float>
      ))}
    </>
  );
}

function Particles() {
  const particles = useMemo(() => {
    const positions = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return positions;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <>
      <color attach="background" args={['#000000']} />

      {/* Strong lighting for visibility */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-5, 3, 5]} intensity={0.5} color="#8b0000" />
      <pointLight position={[0, 2, 3]} intensity={1} color="#ffffff" distance={10} />
      <pointLight position={[2, -1, 2]} intensity={0.5} color="#8b0000" distance={8} />
      <pointLight position={[-2, 0, 2]} intensity={0.3} color="#ffffff" distance={6} />

      {/* Main tattoo machine - larger and centered */}
      <TattooMachine />

      {/* Supporting elements */}
      <InkBottle />
      <InkDrops />
      <FloatingNeedles />
      <Particles />

      <Environment preset="night" />
    </>
  );
}
