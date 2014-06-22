require([
  'jquery',
  'threeCore'
], function($) {
  'use strict';

  var scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
      renderer = new THREE.WebGLRenderer(),
      geometry = new THREE.BoxGeometry(200, 200, 200),
      material = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('assets/img/crate.jpg') }),
      cube = new THREE.Mesh(geometry, material),
      ambientLight = new THREE.AmbientLight(0xbbbbbb),
      directionalLight = new THREE.DirectionalLight(0xffffff);

  cube.overdraw = true;
  camera.position.z = 500;
  directionalLight.position.set(1, 1, 1).normalize();

  scene.add(cube);
  scene.add(ambientLight);
  scene.add(directionalLight);

  renderer.setSize(window.innerWidth, window.innerHeight);
  $('body').append(renderer.domElement);

  function render() {
    window.requestAnimationFrame(render);

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    renderer.render(scene, camera);
  }

  render();
});
