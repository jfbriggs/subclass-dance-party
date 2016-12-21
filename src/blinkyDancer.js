var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.radius = 50;
  this.delay = timeBetweenSteps / 5;
  this.ghettoTimer = 0;
  makeDancer.call(this, top, left, this.delay);

  this.$node.addClass('blinky');


};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, this.delay);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  this.circleMove();
};

makeBlinkyDancer.prototype.circleMove = function(i) {
  this.ghettoTimer += 0.3;
  var newLeft = Math.floor(this.left + (this.radius * Math.cos(this.ghettoTimer)));
  var newTop = Math.floor(this.top + (this.radius * Math.sin(this.ghettoTimer)));
  this.setPosition(newTop, newLeft);
  //this.$node.animate({top: this.newTop, left: this.newLeft}, 1);
};