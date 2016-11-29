
      
     //  var ctx = new AudioContext();
     //  var audio = document.getElementById('audio-player');
     //  var audioSrc = ctx.createMediaElementSource(audio);
     //  var analyser = ctx.createAnalyser();
     //  audioSrc.connect(analyser);
     //  audioSrc.connect(ctx.destination);
     //  var frequencyData = new Uint8Array(analyser.frequencyBinCount)
     //  analyser.getByteFrequencyData(frequencyData)
  
      
     //  // three.js globals
     //  var cubesArray = [] 
     //  var particlesArray = [] 
     //  var camera, scene, renderer; 
     //  var geometry, controls, material, mesh;

     //  function visualSetup() {
     //    //getting correct sizing based on the browser window (more adaptable)
     //    var W = window.innerWidth, H = window.innerHeight;

     //    renderer = new THREE.WebGLRenderer();

     //    renderer.setSize( W, H );

     //    var pseudoBody = document.getElementById("pseudo-body");

     //    document.body.appendChild( renderer.domElement); //the renderer's dom friendly copy
     //    //gets added to the DOM so we can actually see things happen.
     //    // camera setup ========================================
     //    camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
     //    camera.position.z = 100;
     //    // =====================================================
     //    scene = new THREE.Scene();
        
     //    geometry = new THREE.CubeGeometry(200, 200, 200);
     //    material = new THREE.MeshNormalMaterial({shading: THREE.FlatShading});
     //    mesh = new THREE.Mesh(geometry, material);
     //    scene.add(mesh);


     //    // this is all we need to be able to click and move camera 
  
     //    // =======================================================



     //    ///////////background particles/////////////




     //  function draw() {
     //    requestAnimationFrame( draw );

     //      console.log(frequencyData);



     //     }

     //    camera.position.x = Math.sin( Date.now() * 0.0005 ) * 5;

     //    renderer.render( scene, camera );

     // }

     //  visualSetup();
     //  draw();

