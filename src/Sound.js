

// HOW TO SETUP NEW INSTANCES OF SOUNDS
// let context = new (window.AudioContext || window.webkitAudioContext)();
// let note = new Sound(context);
// let now = context.currentTime;
// note.play(261.63, now);
// note.play(293.66, now + 0.5);

class Sound {
  constructor(context) {
    this.context = context;
  }

  init(type) {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    // this.highShelf = this.context.createBiquadFilter();
    // this.lowShelf = this.context.createBiquadFilter();
    // this.highPass = this.context.createBiquadFilter();
    // this.lowPass = this.context.createBiquadFilter();
    // this.dist = this.context.createWaveShaper();

    this.oscillator.connect(this.gainNode);


    // this.highShelf.connect(this.lowShelf);
    // this.lowShelf.connect(this.highPass);
    // this.highPass.connect(this.lowPass);

    this.oscillator.type = type;

    // this.highShelf.type = "highshelf";
    // this.highShelf.frequency.value = 4700;
    // this.highShelf.gain.value = 50;
    //
    // this.lowShelf.type = "lowshelf";
    // this.lowShelf.frequency.value = 35;
    // this.lowShelf.gain.value = 50;
    //
    // this.highPass.type = "highpass";
    // this.highPass.frequency.value = 800;
    // this.highPass.Q.value = 12;
    //
    // this.lowPass.type = "lowpass";
    // this.lowPass.frequency.value = 880;
    // this.lowPass.Q.value = 12;

    // this.dist.curve = this.makeDistortionCurve(0);

    // var range = document.querySelector('#range');
    // range.addEventListener('input', function(){
    //   var value = parseInt(this.value) * 5;
    //   dist.curve = makeDistortionCurve(value);
    // });

    // http://stackoverflow.com/a/22313408/1090298

    this.gainNode.connect(this.context.destination);


  }

  // makeDistortionCurve( amount ) {
  //   var k = typeof amount === 'number' ? amount : 0,
  //     n_samples = 44100,
  //     curve = new Float32Array(n_samples),
  //     deg = Math.PI / 180,
  //     i = 0,
  //     x;
  //   for ( ; i < n_samples; ++i ) {
  //     x = i * 2 / n_samples - 1;
  //     curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  //   }
  //   return curve;
  // }

  play(type, value) {
    this.init(type);

    this.oscillator.frequency.value = value;
    // this.gainNode.gain.setValueAtTime(1, this.context.currentTime);
    this.gainNode.gain.value = 1

    this.oscillator.start();
  }

  stop(time) {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, time + 1);
    this.oscillator.stop(time + 1);
  }


  // HOW TO SETUP NEW INSTANCES OF SOUNDS
  // let context =
  // let note = new Sound(context);
  // let now = context.currentTime;
  // note.play(261.63, now);
  // note.play(293.66, now + 0.5);

  changeFreqVal(freqVal){
    this.oscillator.frequency.value = freqVal;
  }

  changeGainVal(gainVal){
    this.gainNode.gain.value = gainVal;
  }

  // changeHighPassVal(freqVal){
  //   this.highPass.frequency.value = freqVal;
  // }
  //
  // changeLowPassVal(freqVal){
  //   this.lowPass.frequency.value = freqVal;
  // }
  //
  // changeHighShelfVal(freqVal){
  //   this.highShelf.frequency.value = freqVal;
  // }
  //
  // changeLowShelfVal(freqVal){
  //   this.lowShelf.frequency.value = freqVal;
  // }
  //
  //
  // changeDistortionVal(distVal){
  //   this.dist.curve = this.makeDistortionCurve(distVal);
  // }

}

export default Sound
