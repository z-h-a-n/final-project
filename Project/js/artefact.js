var sunMesh;

function loadArtefact() {
		// torus geometry
	var geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );	
	// var geometry = new THREE.BoxGeometry( 100, 100, 100 );
	var material = new THREE.MeshLambertMaterial( { 
		emissive: "#9d009d",
		color: "#0d7500"
		} )
	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.set(0, 100, 300)
	mesh.scale.set(10, 10, 10)
	// cube1.position.set(-100, -150, 400)
	// scene.add( mesh );


	var directionalLight = new THREE.DirectionalLight( "#E5FFCC", 3 );
	directionalLight.position.set( 1, .5, 2 );
	scene.add( directionalLight );

	// var directionalLight1 = new THREE.DirectionalLight( "#E5FFCC", .2 );
	// directionalLight.position.set( -4, 4, -3 );
	// scene.add( directionalLight1 );

	// sun
	var sunGeometry = new THREE.SphereGeometry( 200, 64, 64 );
	var sunMaterial = new THREE.MeshBasicMaterial( {color: "#FFE600"} );
	sunMesh = new THREE.Mesh( sunGeometry, sunMaterial );
	sunMesh.position.set(200, 600, 100)
	

	// instantiate a loader
	// set scale if object not seen
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
		scene.add(object);
		fish = object;
	});


}