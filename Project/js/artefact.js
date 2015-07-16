function loadArtefact() {
		// cube geometry
	var geometry = new THREE.BoxGeometry( 100, 100, 100 );
	var material = new THREE.MeshLambertMaterial( { 
		emissive: "#00ffaa",
		wireframe: false} )
	var cube = new THREE.Mesh( geometry, material );
	var cube1 = new THREE.Mesh( geometry, material );
	cube.position.set(0, 100, 300)
	// cube1.position.set(-100, -150, 400)
	scene.add( cube1 );
	scene.add( cube );


	// instantiate a loader
	// set scale if object not seen
	var model = [];
	model.push(cube);
	model.push(cube1);
	var loader = new THREE.OBJLoader();
	// load a resource
	loader.load('../assets/tuna.obj', function (object) {

		object.traverse(function (child) {
	    if( child instanceof THREE.Mesh ) {
	    	console.log(material);
	      child.material = material;
	      child.material.needsUpdate = true;
	    }
		});

		object.scale.set(200,200,200);
		object.position.set(0, 200, 0)
		model.push(object);
		scene.add(object);
		fish = object;
	});

	return model;

}