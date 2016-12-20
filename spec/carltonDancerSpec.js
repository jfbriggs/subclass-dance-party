describe('carltonDancer', function() {

  var carltonDancer, clock;
  var timeBetweenSteps = 2000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    carltonDancer = new makeCarltonDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(carltonDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its size animate', function() {
    sinon.spy(carltonDancer.$node, 'animate');
    carltonDancer.step();
    expect(carltonDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(carltonDancer, 'step');
      expect(carltonDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(carltonDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(carltonDancer.step.callCount).to.be.equal(2);
    });
  });
});
