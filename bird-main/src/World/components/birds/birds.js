import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from './setupModel.js';

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('/bird-main/assets/models/a.glb'),
    loader.loadAsync('/bird-main/assets/models/a.glb'),
    loader.loadAsync('/bird-main/assets/models/a.glb'),
  ]);

  console.log('Squaaawk!', parrotData);

  const parrot = setupModel(parrotData);
  parrot.position.set(0, 0, 2.5);

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(7.8, 1, -10);

  const stork = setupModel(storkData);
  stork.position.set(1, -2.8, -10);

  return {
    parrot,
    flamingo,
    stork,
  };
}

export { loadBirds };
