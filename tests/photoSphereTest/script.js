console.log('hello')

$(document).ready(function(){

	var width  = window.innerWidth,
	    height = window.innerHeight;

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
	camera.position.z = 0;

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	$('body').append(renderer.domElement);

	var sphere = new THREE.Mesh(
	  new THREE.SphereGeometry(100, 32, 32),
	  new THREE.MeshBasicMaterial({
	    map: THREE.ImageUtils.loadTexture('panoImg.png')
	  })
	);
	scene.add(sphere);

	// sphere.scale.x = -1;

	// var controls = new THREE.OrbitControls(camera);
	// controls.noPan = true;
	// controls.noZoom = true; 
	// controls.autoRotate = true;
	// controls.autoRotateSpeed = 0.5;

	// function onMouseWheel(event) {
	//   if (event.wheelDeltaY) { // WebKit
	//     camera.fov -= event.wheelDeltaY * 0.05;
	//   } else if (event.wheelDelta) { // Opera / IE9
	//     camera.fov -= event.wheelDelta * 0.05;
	//   } else if (event.detail) { // Firefox
	//     camera.fov += event.detail * 1.0;
	//   }

	//   camera.fov = Math.max(40, Math.min(100, camera.fov));
	//   camera.updateProjectionMatrix();
	// }

	// document.addEventListener('mousewheel', onMouseWheel, false);
	// document.addEventListener('DOMMouseScroll', onMouseWheel, false);

	renderer.render(scene, camera);

})