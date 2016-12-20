var makeCarltonDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.delay = timeBetweenSteps;

  this.$node.addClass('carlton');
  this.$node.attr('src', 'https://68.media.tumblr.com/504cb94fe0f41e563f435ee2f833dcb5/tumblr_n47d7f7uFv1rt5pgzo1_400.gif');

};

makeCarltonDancer.prototype = Object.create(makeDancer.prototype);
makeCarltonDancer.prototype.constructor = makeCarltonDancer;


makeCarltonDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this, this.delay);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};