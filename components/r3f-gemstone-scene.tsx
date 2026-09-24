'use client';
import { Canvas } from '@react-three/fiber';
import { Float, Edges } from '@react-three/drei';

export default function GemstoneScene() {
	return (
		<Canvas camera={{ position: [0, 0, 4], fov: 50 }} gl={{ alpha: true }}>
			<ambientLight intensity={0.4} />
			<directionalLight position={[-3, 4, 3]} intensity={5} color="#d6cbff" />
			<Float speed={1} rotationIntensity={0.6} floatIntensity={0.8}>
				<mesh scale={[1, 2, 1]}>
					<octahedronGeometry args={[0.9, 0]} />
					<meshPhysicalMaterial color="#7c5cff" roughness={0.25} metalness={0.1} clearcoat={0.5} />
					<Edges color="#29292f" linewidth={2} />
				</mesh>
			</Float>
		</Canvas>
	);
}
