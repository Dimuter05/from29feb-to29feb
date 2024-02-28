window.onload = function onLoad() {
  var line = new ProgressBar.Line('#progress', {
    color: '#FCB03C'
  });

  function progress() {
    var now = new Date();
    var from = Math.floor(now.getFullYear() / 4) * 4;
    var to = Math.ceil(now.getFullYear() / 4) * 4;
    if (now.getFullYear() == from && now < new Date(now.getFullYear(), 1, 29)) {
      from = from - 4;
    };
    if (now.getFullYear() == to && now > new Date(now.getFullYear(), 1, 29)) {
      to = to + 4;
    };
    var start = new Date(from, 1, 29;
    var end = new Date(to, 1, 29);
    var done = (now-start) / (end-start);
    var percentStr = (100.0 * done).toString();
    if (done < 0.1) {
      percentStr = percentStr.slice(0, 9);
    } else {
      percentStr = percentStr.slice(0, 10);
    }
    document.getElementById("percent").innerHTML = percentStr + "%";
    return done;
  }

  line.animate(progress());  // Number from 0.0 to 1.0

  requestAnimationFrame(update);

  function update() {
    line.set(progress());
    requestAnimationFrame(update);
  }
};
