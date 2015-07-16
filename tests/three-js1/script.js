console.log('hello')

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#A1FFCF");
$('body').append(renderer.domElement);

// var geometry1 = new THREE.BoxGeometry(2, 1, 1);
var geometry2 = new THREE.TorusGeometry(2, .1, 20, 50);
var material = new THREE.MeshLambertMaterial({color: "#FF530D",
																							emissive: "#009d94"
																							});

// var cube = new THREE.Mesh(geometry1, material);
// scene.add(cube);
var torus = new THREE.Mesh(geometry2, material);
scene.add(torus)

// model
// instantiate a loader
var model = [];
var loader = new THREE.OBJLoader();
// load a resource
loader.load('./tuna.obj', function (object) {
	object.traverse(function (child) {
    if( child instanceof THREE.Mesh ) {
      child.material = material;
      child.material.needsUpdate = true;
    }
	});

	model.push(object);
	scene.add(object);
});

var spotLight2 = new THREE.SpotLight( 0xffffff );
spotLight2.position.set( 40, -60, 20 );
spotLight2.castShadow = true;
scene.add( spotLight2 );

camera.position.z = 1;

// Place camera on x axis
// camera.position.set(2,0,0);
// camera.up = new THREE.Vector3(0,0,1);
// camera.lookAt(new THREE.Vector3(0,0,0));

// this is called a render loop that causes the renderer to draw the scene 60 times per second
function render() {
	requestAnimationFrame(render);	
	// camera.position.x += ( mouseX - camera.position.x ) * .05;
	// camera.position.y += ( - mouseY - camera.position.y ) * .05;
	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;
	model[0].rotation.x += 0.02;
	model[0].rotation.y += 0.02;
	torus.rotation.x += 0.02;
	torus.rotation.y += 0.02;
	camera.lookAt(scene.position);
	renderer.render(scene, camera);
}
render();




