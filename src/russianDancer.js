var makeRussianDancer = function(top, left, timeBetweenSteps) {
  this.delay = timeBetweenSteps * 3;
  makeDancer.call(this, top, left, this.delay);



  this.$node.addClass('russian');
  this.$node.attr('src', 'assets/RUSSIA.gif');

};

makeRussianDancer.prototype = Object.create(makeDancer.prototype);
makeRussianDancer.prototype.constructor = makeRussianDancer;

makeRussianDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, this.delay);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  this.rotation();
};

makeRussianDancer.prototype.rotation = function () {
  this.$node.rotate({
    angle: 0,
    animateTo: 360,
    callback: this.rotation.bind(this)
  });
};

