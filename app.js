// Create scene, camera, and renderer
const container = document.getElementById('dragon-3d-container');
const width = container.clientWidth;
const height = container.clientHeight;

const scene = new THREE.Scene();
scene.background = null;

// Define default camera position using provided coordinates
const defaultCameraPosition = new THREE.Vector3(-22.779043262523658, -0.5924361620713063, 11.290841085224343);

// Create and position the camera
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.copy(defaultCameraPosition);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// Enable gamma correction
renderer.outputEncoding = THREE.sRGBEncoding;

renderer.setSize(width, height);
container.appendChild(renderer.domElement);

// OrbitControls for panning and zooming
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enablePan = true;
controls.minDistance = 10;
controls.maxDistance = 500;

// Set default control position and orientation
controls.target.set(-2.924416918924726, 0, -3.8973546839286306); // Target position where the camera is looking at
controls.update(); // Update controls to reflect the changes


camera.position.z = 15;
camera.position.x = -20;
console.log('Camera position:', camera.position);
console.log('Pan:', controls.target);

// Add Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Soft white light
scene.add(ambientLight);

// Add Directional Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Bright white light
directionalLight.position.set(5, 10, 7.5); // Position the light in 3D space
directionalLight.castShadow = true; // Enable shadows if needed

scene.add(directionalLight);


// Load GLB model
const loader = new THREE.GLTFLoader();
loader.load('images/dragon2.glb', function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  
  // Adjust the position and scale of the model if necessary
  model.position.set(0, 0, 0);
  model.scale.set(1, 1, 1); // Adjust scale if needed
  
  // Optional: center the model if it's not already centered
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  model.position.sub(center);
}, undefined, function(error) {
  console.error('An error occurred while loading the model:', error);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
  const newWidth = container.clientWidth;
  const newHeight = container.clientHeight;
  renderer.setSize(newWidth, newHeight);
  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();
});
