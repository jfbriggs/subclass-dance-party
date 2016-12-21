describe('russianDancer', function() {

  var russianDancer, clock;
  var timeBetweenSteps = 2000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    russianDancer = new makeRussianDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(russianDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node rotate', function() {
    sinon.spy(russianDancer, 'rotation');
    russianDancer.step();
    expect(russianDancer.rotation.called).to.be.true;
  });

  describe('dance', function() {
    xit('has a modified timeBetweenSteps', function() {
      sinon.spy(russianDancer, 'step');
      expect(russianDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(russianDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(russianDancer.step.callCount).to.be.equal(2);
    });
  });
});
