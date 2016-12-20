var makeBoybandDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.delay = timeBetweenSteps;

  this.$node.addClass('boyband');
  this.$node.attr('src', 'assets/boyband.gif');

};

makeBoybandDancer.prototype = Object.create(makeDancer.prototype);
makeBoybandDancer.prototype.constructor = makeBoybandDancer;

makeBoybandDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, this.delay);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({'left': '+=20'}, 500);
  this.$node.animate({'left': '-=20'}, 500);
};