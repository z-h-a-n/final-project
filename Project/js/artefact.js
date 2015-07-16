function loadArtefact() {
		// cube geometry
	var geometry = new THREE.BoxGeometry( 100, 100, 100 );
	var material = new THREE.MeshLambertMaterial( { 
		emissive: "#9d009d",
		color: "#0d7500"
		} )
	var cube = new THREE.Mesh( geometry, material );
	var cube1 = new THREE.Mesh( geometry, material );
	cube.position.set(0, 100, 300)
	// cube1.position.set(-100, -150, 400)
	scene.add( cube1 );
	scene.add( cube );

	var directionalLight = new THREE.DirectionalLight( "#E5FFCC", 3 );
	directionalLight.position.set( 1, .5, 2 );
	scene.add( directionalLight );

	// var directionalLight1 = new THREE.DirectionalLight( "#E5FFCC", .2 );
	// directionalLight.position.set( -4, 4, -3 );
	// scene.add( directionalLight1 );

	// instantiate a loader
	// set scale if object not seen
	var model = [];
	model.push(cube);
	model.push(cube1);
	var loader = new THREE.OBJLoader();
	// load a resource
	loader.load('../assets/zeplin.obj', function (object) {
		var geometry = object.children[0].geometry;
		geometry.computeFaceNormals()
		geometry.computeVertexNormals()

		object.traverse(function (child) {
	    if( child instanceof THREE.Mesh ) {
	    	console.log(material);
	      child.material = material;
	      child.material.needsUpdate = true;
	    }
		});

		object.scale.set(500,400,400);
		object.position.set(0, 400, 0)
		model.push(object);
		scene.add(object);
		fish = object;
	});


}