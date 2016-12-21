describe('bananasDancer', function() {

  var bananasDancer, clock;
  var timeBetweenSteps = 2000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bananasDancer = new makeBananasDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bananasDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node animate', function() {
    sinon.spy(bananasDancer.$node, 'animate');
    bananasDancer.step();
    expect(bananasDancer.$node.animate.called).to.be.true;
  });

  xit('should not have a height of less than -30', function() {
    sinon.spy(bananasDancer.$node.get('top'));
    bananasDancer.step();
    expect(parseInt(bananasDancer.$node.get('top'))).to.be.above(-30);
  });
  
  describe('dance', function() {
    xit('should call step at least once per second', function() {
      sinon.spy(bananasDancer, 'step');
      expect(bananasDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bananasDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bananasDancer.step.callCount).to.be.equal(2);
    });
  });
});
