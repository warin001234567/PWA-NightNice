var app = new Vue({
  el: "#app",
  data: {
    time: [],
    sleepTime: null,
    wakeTime: null,
    showButton: false,
    showSleepInput: false,
    showWakeInput: false,
    showHomeButton: true,
  },
  methods: {
    addDate: function () {
      //   console.log(this.sleepTime.slice(3, 5));
      //   let hour = this.sleepTime.slice(0, 2);
      //   let minute = this.sleepTime.slice(3, 5);
      //   console.log(hour + ":" + minute);
      if (this.sleepTime == null && this.wakeTime == null) {
        alert("Plese input Time!!!");
      } else {
        if (this.showSleepInput) {
          let hour = this.sleepTime.slice(0, 2);
          let minute = this.sleepTime.slice(3, 5);
          this.time.push(hour + ":" + minute);
        } else {
          let hour = this.wakeTime.slice(0, 2);
          let minute = this.wakeTime.slice(3, 5);
          this.time.push(hour + ":" + minute);
          this.time.push(this.wakeTime);
        }
        this.showButton = true;
      }
    },
    showInput: function (temp) {
      if (temp === "showSleepInput") {
        this.showSleepInput = !this.showSleepInput;
      } else {
        this.showWakeInput = !this.showWakeInput;
      }
      this.showHomeButton = false;
    },
  },
});
