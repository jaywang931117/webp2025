var container = document.getElementById('container');

window.onload = function () {
  container.textContent = add_new_chars(3);
};

function add_new_chars(x, b = true) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // 僅英文字母
  var n = x;
  if (b) {
    n = Math.floor(Math.random() * x) + 1;
  }

  var str = '';
  for (let i = 0; i < n; i++) {
    str += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return str;
}

var counter = 0;

window.addEventListener("keyup", function (e) {
  var firstone = container.textContent.substring(0, 1);

  if (e.key === firstone) {
    container.textContent = container.textContent.substring(1);
  } else {
    container.textContent += e.key;

    if (counter++ >= 2) {
      container.textContent += add_new_chars(6, false);
      counter = 0;
    }
  }

  if (container.textContent.length === 0) {
    container.textContent = add_new_chars(3);
  }
});
