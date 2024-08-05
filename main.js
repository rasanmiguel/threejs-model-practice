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

const cube = new THREE.Mesh(geomtry, material);
scene.add(cube);

// Renderer


