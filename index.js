new Vue({
  el: '#app',
  data: {
    message: null,
    interval: 0
  },
  created() {
    this.onKeyDown = this.onKeyDown.bind(this);
    document.addEventListener('keydown', this.onKeyDown);
  },
  destroyed() {
    document.removeEventListener('keydown', this.onKeyDown);
  },
  methods: {
    onKeyDown(e) {
      if(this.interval === 0) {
        this.message = String.fromCharCode(e.keyCode)
        this.interval = 1
        this.minusOne()
        this.playSound(`./pronoun/${this.message}.mp3`);
        console.log(`./pronoun/${this.message.toLocaleLowerCase()}.mp3`)
      }
    },
    playSound(sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    minusOne() {
      setInterval(() => {
        if(this.interval > 0) {
          this.interval -= 1;
        }
      }, 1500);
    }
  },
  beforeDestroy () {
    clearInterval(this.interval);
  },
})
