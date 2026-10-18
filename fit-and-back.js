(function () {
  var app = document.getElementById('divApplab');
  var backBtn = document.getElementById('backBtn');
  var screens = Array.prototype.slice.call(app.querySelectorAll('.screen'));
  var BAR = 56; // space reserved for the back button under the app

  /* ---- Fix: Lung age screen had its Enter button at top:430px (ends at 470 > 450) ---- */
  (function fixLungAgeScreen() {
    var scr = document.getElementById('Lung:Screen2');
    if (!scr) return;
    var btn = document.getElementById('button111');
    var link = scr.querySelector('a');
    var labels = scr.querySelectorAll('label');
    for (var i = 0; i < labels.length; i++) {
      if (labels[i].textContent.indexOf('Visit this website') === 0) {
        labels[i].style.top = '335px';
      }
    }
    if (link) link.style.top = '365px';
    if (btn) btn.style.top = '398px';
  })();

  /* ---- Scale the 320x450 app to fill the window, centered both ways ---- */
  function fit() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var s = Math.min(w / 320, (h - BAR) / 450);
    var total = 450 * s + BAR;
    var left = (w - 320 * s) / 2;
    var top = Math.max(0, (h - total) / 2);

    app.style.transform = 'scale(' + s + ')';
    app.style.left = left + 'px';
    app.style.top = top + 'px';

    backBtn.style.left = left + 'px';
    backBtn.style.top = (top + 450 * s + 4) + 'px';
    backBtn.style.width = (320 * s) + 'px';
  }
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', function () { setTimeout(fit, 150); });
  fit();

  /* ---- Back button ---- */
  var history = [];
  var last = null;

  function visibleScreen() {
    for (var i = 0; i < screens.length; i++) {
      if (window.getComputedStyle(screens[i]).display !== 'none') return screens[i];
    }
    return null;
  }

  function updateBtn() {
    backBtn.disabled = history.length === 0;
  }

  // Baseline: whatever screen is showing right now (code.js has already run setScreen("Start"))
  last = visibleScreen();
  updateBtn();

  var observer = new MutationObserver(function () {
    var cur = visibleScreen();
    if (!cur || cur === last) return;

    if (cur.id === 'Start') {
      history = [];            // "Take Another Test" starts a fresh trail
    } else if (last) {
      history.push(last);
    }
    last = cur;
    updateBtn();
  });
  screens.forEach(function (s) {
    observer.observe(s, { attributes: true, attributeFilter: ['style'] });
  });

  backBtn.addEventListener('click', function () {
    var prev = history.pop();
    if (!prev) return;
    var cur = visibleScreen();
    if (cur) cur.style.display = 'none';
    prev.style.display = 'block';
    last = prev;                // set before the observer fires so it ignores this change
    updateBtn();
  });
})();