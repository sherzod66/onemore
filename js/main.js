import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const firstElem = document.querySelector('#three1');



const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(firstElem.clientWidth, firstElem.clientHeight);
firstElem.append(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
	75, firstElem.clientWidth / firstElem.clientHeight, 0.1, 1000
);

const uniforms = {
	u_time: { type: 'f', value: 0.0 },
}




const sphereGeometry = new THREE.SphereGeometry(10, 30, 30);
const sphereMaterial = new THREE.ShaderMaterial({
	vertexShader: document.getElementById('vertexShader').textContent,
	fragmentShader: document.getElementById('fragmentShader').textContent,
	wireframe: true,
	uniforms
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
scene.add(sphere);

camera.position.set(10, 0, 10);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

const clock = new THREE.Clock();
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	uniforms.u_time.value = clock.getElapsedTime();
}
animate();

