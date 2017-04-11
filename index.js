module.exports = {
  controls:   require('./src/controls'),
  loaders:    require('./src/loaders'),
  misc:       require('./src/misc'),
  physics:    require('aframe-physics-system'),
  primitives: require('./src/primitives'),
  'state-machine': require('./src/state-machine'),

  registerAll: function () {
    this.controls.registerAll();
    this.loaders.registerAll();
    this.misc.registerAll();
    this.physics.registerAll();
    this.primitives.registerAll();
    this['state-machine'].registerAll();
  }
};
