describe('boybandDancer', function() {

  var boybandDancer, clock;
  var timeBetweenSteps = 2000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    boybandDancer = new makeBoybandDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(boybandDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node animate', function() {
    sinon.spy(boybandDancer.$node, 'animate');
    boybandDancer.step();
    expect(boybandDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(boybandDancer, 'step');
      expect(boybandDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(boybandDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(boybandDancer.step.callCount).to.be.equal(2);
    });
  });
});
