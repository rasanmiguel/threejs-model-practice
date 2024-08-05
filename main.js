import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const fieldOfView = 45;
const aspectRatio = window.innerWidth / window.innerHeight;
const nearClipping = 0.1;
const farClipping = 1000;
const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearClipping, farClipping);

camera.position.z = 5;

// Mesh = Geometry + Material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// Animation
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate()


