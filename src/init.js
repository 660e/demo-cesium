import * as Cesium from 'cesium';

const viewer = new Cesium.Viewer('c', {
  terrainProvider: Cesium.createWorldTerrain()
});

const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());

viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(116.46633, 40.0173, 200),
  orientation: {
    heading: Cesium.Math.toRadians(0.0),
    pitch: Cesium.Math.toRadians(-15.0)
  }
});
