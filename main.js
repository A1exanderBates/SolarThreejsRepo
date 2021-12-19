import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scene, camera);

// Sun 
const sunTexture = new THREE.TextureLoader().load('sun2.jpg')

const sunGeo = new THREE.SphereGeometry( 30, 50, 50)
const sunMat = new THREE.MeshStandardMaterial( { 
  map: sunTexture
} );

const sun = new THREE.Mesh( sunGeo, sunMat );

sun.position.x = 0; sun.position.y = 0; sun.position.z = 0;

scene.add(sun)

// Mercury

const mercTexture = new THREE.TextureLoader().load('mercury.jpg')

const mercGeo = new THREE.IcosahedronGeometry( 0.35, 50, 50)
const mercMat = new THREE.MeshStandardMaterial( { 
  map: mercTexture
} );

const merc = new THREE.Mesh( mercGeo, mercMat );

merc.position.x = 60; merc.position.y = 0; merc.position.z = 0;

scene.add(merc)

// Venus

const venusTexture = new THREE.TextureLoader().load('venus2.jpg')

const venusGeo = new THREE.SphereGeometry( 0.87, 50, 50)
const venusMat = new THREE.MeshStandardMaterial( { 
  map: venusTexture
} );

const venus = new THREE.Mesh( venusGeo, venusMat );

venus.position.x = 75; venus.position.y = 0; venus.position.z = 0;

scene.add(venus)

// Earth
const earthTexture = new THREE.TextureLoader().load('earth.jpg')

const earthGeo = new THREE.SphereGeometry( 0.92, 50, 50)
const earthMat = new THREE.MeshStandardMaterial( {
  map: earthTexture
})

const earth = new THREE.Mesh( earthGeo, earthMat);

earth.position.x = 100; earth.position.y = 0; earth.position.z = 0;

scene.add(earth)


// Mars

const marsTexture = new THREE.TextureLoader().load('mars.jpg')

const marsGeo = new THREE.SphereGeometry( 0.49, 50, 50)
const marsMat = new THREE.MeshStandardMaterial( {
  map: marsTexture
})

const mars = new THREE.Mesh( marsGeo, marsMat);

mars.position.x = 150; mars.position.y = 0; mars.position.z = 0;

scene.add(mars)

// Jupiter

const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg')

const jupiterGeo = new THREE.SphereGeometry( 10.29, 50, 50)
const jupiterMat = new THREE.MeshStandardMaterial( {
  map: jupiterTexture
})

const jupiter = new THREE.Mesh( jupiterGeo, jupiterMat);
 jupiter.position.x = 200; jupiter.position.y = 0; jupiter.position.z = 0;

scene.add(jupiter)

// Saturn

const saturnTexture = new THREE.TextureLoader().load('saturn.jpg')

const saturnGeo = new THREE.SphereGeometry( 8.66, 50, 50)
const saturnMat = new THREE.MeshStandardMaterial( {
  map: saturnTexture
})

const saturn = new THREE.Mesh( saturnGeo, saturnMat);
 saturn.position.x = 250; saturn.position.y = 0; saturn.position.z = 0;

scene.add(saturn)

// Uranus

const uranusTexture = new THREE.TextureLoader().load('uranus.jpg')

const uranusGeo = new THREE.SphereGeometry( 3.70, 50, 50)
const uranusMat = new THREE.MeshStandardMaterial( {
  map: uranusTexture
})

const uranus = new THREE.Mesh( uranusGeo, uranusMat);
 uranus.position.x = 300; uranus.position.y = 0; uranus.position.z = 0;

scene.add(uranus)

// Neptune

const neptuneTexture = new THREE.TextureLoader().load('neptune.jpg')

const neptuneGeo = new THREE.SphereGeometry( 3.58, 50, 50)
const neptuneMat = new THREE.MeshStandardMaterial( {
  map: neptuneTexture
})

const neptune = new THREE.Mesh( neptuneGeo, neptuneMat);
 neptune.position.x = 350; neptune.position.y = 0; neptune.position.z = 0;

scene.add(neptune)



// Light 

const pointLight = new THREE.AmbientLight(0xffffff)
pointLight.position.set(0,0,0)

const ambientLight = new THREE.PointLight(0xffffff)
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

const spaceTexture = new THREE.TextureLoader().load('galaxy_starfield.png');
scene.background = spaceTexture;

// Orbital rings

// Mercury orbital ring

const mercgeometry = new THREE.RingGeometry( 60.3, 60, 100, 100, 6.28318, 6.28318);
const mercmaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const mercRing = new THREE.Mesh( mercgeometry, mercmaterial );
scene.add( mercRing );

mercRing.rotateX( 1.5708);

// Venus orbital ring

const venusgeometry = new THREE.RingGeometry( 75.3, 75, 100, 100, 6.28318, 6.28318);
const venusmaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const venusRing = new THREE.Mesh( venusgeometry, venusmaterial );
scene.add( venusRing );

venusRing.rotateX( 1.5708);

// Earth orbital ring

const earthgeometry = new THREE.RingGeometry( 100.3, 100, 100, 100, 6.28318, 6.28318);
const earthmaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const earthRing = new THREE.Mesh( earthgeometry, earthmaterial );
scene.add( earthRing );

earthRing.rotateX( 1.5708);

// mars orbital ring

const marsgeometry = new THREE.RingGeometry( 150.3, 150, 100, 100, 6.28318, 6.28318);
const marsmaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const marsRing = new THREE.Mesh( marsgeometry, marsmaterial );
scene.add( marsRing );

marsRing.rotateX( 1.5708);

// jupiter orbital ring

const jupitergeometry = new THREE.RingGeometry( 200.3, 200, 100, 100, 6.28318, 6.28318);
const jupitermaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const jupiterRing = new THREE.Mesh( jupitergeometry, jupitermaterial );
scene.add( jupiterRing );

jupiterRing.rotateX( 1.5708);

// saturn orbital ring

const saturngeometry = new THREE.RingGeometry( 250.3, 250,  100, 100, 6.28318, 6.28318);
const saturnmaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const saturnRing = new THREE.Mesh( saturngeometry, saturnmaterial );
scene.add( saturnRing );

saturnRing.rotateX( 1.5708);

// uranus orbital ring

const uranusgeometry = new THREE.RingGeometry( 300.3, 300, 100, 100, 6.28318, 6.28318);
const uranusmaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const uranusRing = new THREE.Mesh( uranusgeometry, uranusmaterial );
scene.add( uranusRing );

uranusRing.rotateX( 1.5708);

// neptune orbital ring

const neptunegeometry = new THREE.RingGeometry( 350.3, 350, 100, 100, 6.28318, 6.28318);
const neptunematerial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const neptuneRing = new THREE.Mesh( neptunegeometry, neptunematerial );
scene.add( neptuneRing );

neptuneRing.rotateX( 1.5708);


// creating list of plants

const solarPlanets = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']

/* planet generation function

planet_gen = function() {
  for (let i = 0; i < solarPlanets.length; i++) {

    const [i]Texture = new THREE.TextureLoader().load('[i].jpg')
    const [i]Geo = new THREE.IcosahedronGeometry( [j], 5, 20, 100)
    const [i]Mat = new THREE.MeshStandardMaterial( {
      map: [i]Texture
    })
    const [i]] = new THREE.Mesh( [i]]Geo, [i]]Mat);
    [i]].position.x = 350; [i]].position.y = 0; [i]].position.z = 0;
    
    scene.add([i]])
  }
}

*/

//Set the moon's orbital radius, start angle, and angle increment value
var merc_R = 60
var venus_R = 75
var earth_R = 100;
var mars_R = 150;
var jupiter_R = 200;
var saturn_R = 250;
var uranus_R = 300;
var neptune_R = 350;
var theta_merc = 0;
var theta_venus = 0;
var theta_earth = 0;
var theta_mars = 0;
var theta_jupiter = 0;
var theta_saturn = 0;
var theta_uranus = 0;
var theta_neptune = 0;
var dTheta = 1 * Math.PI / 1000;

var merc_orbit = 0.24
var venus_orbit = 0.62
var earth_orbit = 1
var mars_orbit = 1.88
var jupiter_orbit = 11.86
var saturn_orbit = 29.46
var uranus_orbit = 84.01
var neptune_orbit = 164.8

function dThetaOrbit(x){
  return((1/x) * Math.PI / 1000);
}

var sun_rotation = (1/0.0729)
var merc_rotation = (1/0.1593)
var venus_rotation = (1/0.6561)
var earth_rotation = (1/0.0027)
var mars_rotation = (1/0.0028)
var jupiter_rotation = (1/0.00108)
var saturn_rotation = (1/0.00122)
var uranus_rotation = (1/0.0019)
var neptune_rotation = (1/0.0018)


function animate() {
  requestAnimationFrame( animate );

  sun.rotation.y += 0.0009;
  merc.rotation.y += merc_rotation;
  venus.rotation.y -= venus_rotation;
  earth.rotation.y += earth_rotation;
  mars.rotation.y += mars_rotation;
  jupiter.rotation.y += jupiter_rotation;
  saturn.rotation.y += saturn_rotation;
  uranus.rotation.y -= uranus_rotation;
  neptune.rotation.y += neptune_rotation;


  controls.update()

  theta_merc -= dThetaOrbit(merc_orbit);
  theta_venus -= dThetaOrbit(venus_orbit);
  theta_earth -= dThetaOrbit(earth_orbit);
  theta_mars -= dThetaOrbit(mars_orbit);
  theta_jupiter -= dThetaOrbit(jupiter_orbit);
  theta_saturn -= dThetaOrbit(saturn_orbit);
  theta_uranus -= dThetaOrbit(uranus_orbit);
  theta_neptune -= dThetaOrbit(neptune_orbit);

  merc.position.x = merc_R * Math.cos(theta_merc);
  merc.position.z = merc_R * Math.sin(theta_merc);

  venus.position.x = venus_R * Math.cos(theta_venus);
  venus.position.z = venus_R * Math.sin(theta_venus);

  earth.position.x = earth_R * Math.cos(theta_earth);
  earth.position.z = earth_R * Math.sin(theta_earth);

  mars.position.x = mars_R * Math.cos(theta_mars);
  mars.position.z = mars_R * Math.sin(theta_mars);

  jupiter.position.x = jupiter_R * Math.cos(theta_jupiter);
  jupiter.position.z = jupiter_R * Math.sin(theta_jupiter);

  saturn.position.x = saturn_R * Math.cos(theta_saturn);
  saturn.position.z = saturn_R * Math.sin(theta_saturn);

  uranus.position.x = uranus_R * Math.cos(theta_uranus);
  uranus.position.z = uranus_R * Math.sin(theta_uranus);

  neptune.position.x = neptune_R * Math.cos(theta_neptune);
  neptune.position.z = neptune_R * Math.sin(theta_neptune);

  renderer.render( scene, camera );
}

animate()




