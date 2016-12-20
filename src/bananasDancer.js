var makeBananasDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.delay = timeBetweenSteps;

};

makeBananasDancer.prototype = Object.create(makeDancer.prototype);
makeBananasDancer.prototype.constructor = makeBananasDancer;

makeBananasDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, this.delay);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};