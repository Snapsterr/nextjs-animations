'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import type { MotionValue } from 'motion/react';

const MODEL_URL = '/models/fractured-core.glb';
const EXPLODE_DISTANCE = 2.6;
const EDGE_MATERIAL = new THREE.LineBasicMaterial({ color: '#29292f' });

interface ModelProps {
	progress: MotionValue<number>;
}

function Model({ progress }: ModelProps) {
	const { scene } = useGLTF(MODEL_URL);

	// Clone so edge helpers aren't stacked onto the cached GLTF scene on every remount.
	const { root, shards, edgeGeometries } = useMemo(() => {
		const root = scene.clone(true);
		const shards: { object: THREE.Object3D; direction: THREE.Vector3 }[] = [];
		const edgeGeometries: THREE.BufferGeometry[] = [];

		root.traverse((child) => {
			if (!(child as THREE.Mesh).isMesh) return;
			const mesh = child as THREE.Mesh;

			const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
			for (const mat of materials) {
				if (mat instanceof THREE.MeshStandardMaterial) {
					mat.vertexColors = true;
					mat.side = THREE.DoubleSide;
					mat.roughness = 0.25;
					mat.metalness = 0.1;
					mat.needsUpdate = true;
				}
			}

			const edgeGeometry = new THREE.EdgesGeometry(mesh.geometry);
			edgeGeometries.push(edgeGeometry);
			mesh.add(new THREE.LineSegments(edgeGeometry, EDGE_MATERIAL));

			if (!mesh.name.startsWith('shard_')) return;
			mesh.geometry.computeBoundingSphere();
			const center = mesh.geometry.boundingSphere?.center;
			const direction = center && center.lengthSq() > 0.0001 ? center.clone().normalize() : new THREE.Vector3(0, 1, 0);
			shards.push({ object: mesh, direction });
		});

		return { root, shards, edgeGeometries };
	}, [scene]);

	useEffect(() => () => edgeGeometries.forEach((g) => g.dispose()), [edgeGeometries]);

	const lastProgress = useRef(Number.NaN);

	useFrame(() => {
		const t = progress.get();
		if (t === lastProgress.current) return;
		lastProgress.current = t;

		const distance = t * EXPLODE_DISTANCE;
		for (const { object, direction } of shards) {
			object.position.copy(direction).multiplyScalar(distance);
		}
	});

	return (
		<Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.7}>
			<primitive object={root} scale={[1, 1.5, 1]} />
		</Float>
	);
}

useGLTF.preload(MODEL_URL);

export default function FracturedCoreScene({ progress }: ModelProps) {
	return (
		<Canvas camera={{ position: [1, 3, 10], fov: 40 }} dpr={[1, 2]} gl={{ alpha: true, powerPreference: 'high-performance' }}>
			<ambientLight intensity={0.4} />
			<directionalLight position={[-3, 4, 3]} intensity={5} color="#d6cbff" />
			<Model progress={progress} />
		</Canvas>
	);
}
