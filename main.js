import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const fieldOfView = 45;
const aspectRatio = window.innerWidth / window.innerHeight;
const nearClipping = 0.1;
const farClipping = 1000;
const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearClipping, farClipping);

// Model = Mesh + Texture

// Renderer


