

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
    this.oscillator.connect(this.gainNode);
    this.oscillator.type = type;
    this.gainNode.connect(this.context.destination);


  }

  play(type, value) {
    this.init(type);
    this.oscillator.frequency.value = value;
    this.gainNode.gain.value = 1
    this.oscillator.start();
  }

  stop(time) {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, time + 1);
    this.oscillator.stop(time + 1);
  }

  changeFreqVal(freqVal){
    this.oscillator.frequency.value = freqVal;
  }

  changeGainVal(gainVal){
    this.gainNode.gain.value = gainVal;
  }

}

export default Sound
