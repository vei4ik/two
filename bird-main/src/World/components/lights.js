import { DirectionalLight, HemisphereLight } from "https://cdn.skypack.dev/three@0.132.2";

function createLights() {
  const ambientLight = new HemisphereLight(
    'white',
    'darkslategrey',
    5,
  );

  const mainLight = new DirectionalLight('green', 5);
  mainLight.position.set(1, 1, 1);

  return { ambientLight, mainLight };
}

export { createLights };
