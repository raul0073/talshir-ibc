"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import * as THREE from "three";
// @ts-expect-error error on import. works well
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// @ts-expect-error error on import. works well
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelComp: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const labels = useTranslations("ProductPage")
	useEffect(() => {
		if (!canvasRef.current) return;

		const parent = canvasRef.current.parentElement;
		if (!parent) return;

		const width = parent.clientWidth;
		const height = parent.clientHeight;

		// Scene
		const scene = new THREE.Scene();
		scene.background = new THREE.Color('#4F7DF0'); // Set blue background
		// Camera
		const camera = new THREE.PerspectiveCamera(35, width / height, 0.9, 200);
		camera.position.set(2, 5, 5);

		// Renderer
		const renderer = new THREE.WebGLRenderer({
			canvas: canvasRef.current,
			antialias: true,
		});
		renderer.setSize(width, height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// OrbitControls
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;

		// Lighting
		const ambientLight = new THREE.AmbientLight(0xffffff, 50);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
		directionalLight.position.set(80, 30, 20);
		scene.add(directionalLight);

		// Load GLB Model
		const loader = new GLTFLoader();
		loader.load(
			"/models/untitled.glb",
			// eslint-disable-next-line
			(gltf: any) => {
				const model = gltf.scene;
				model.position.set(0, 0, 0);
				model.scale.set(1, 1, 1);
				scene.add(model);
			},
			undefined,
			// eslint-disable-next-line
			(error: any) => {
				console.error("Error loading GLB model:", error);
			}
		);

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);
			controls.update();
			renderer.render(scene, camera);
		};
		animate();

		// Handle window resize
		const handleResize = () => {
			const newWidth = parent.clientWidth;
			const newHeight = parent.clientHeight;

			camera.aspect = newWidth / newHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(newWidth, newHeight);
		};

		window.addEventListener("resize", handleResize);

		// Cleanup on unmount
		return () => {
			window.removeEventListener("resize", handleResize);
			controls.dispose();
			renderer.dispose();
		};
	}, []);

	return <div className="relative w-full h-full">
	<canvas ref={canvasRef} className="w-full h-full" />
	<p className="absolute left-2 bottom-2 text-white text-lg md:text-2xl uppercase">{labels("exploreModel")}</p>
</div>
};

export default ModelComp;
