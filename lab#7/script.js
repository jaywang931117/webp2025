const container = document.getElementById('container');

// 工具函式：產生 a-z 隨機字串
function generateRandomChars(length) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

// 1. window.onload：載入時先加 0~2 個字元
window.onload = function () {
  const initialCount = Math.floor(Math.random() * 3); // 0~2
  container.textContent = generateRandomChars(initialCount);
};

// 2. keyup event：按下鍵盤時比對並新增亂數字串
window.addEventListener("keyup", function (e) {
  let current = container.textContent;

  // 比對第一個字是否等於按下的字
  if (current.length > 0 && e.key === current[0]) {
    container.textContent = current.substring(1); // 刪除第一個字
  }

  // 加入 1~3 個亂數字
  const extraCount = Math.floor(Math.random() * 3) + 1; // 1~3
  container.textContent += generateRandomChars(extraCount);
});

