document.addEventListener("turbo:load", () => {
  // フォローフォーム送信イベントを捕捉
  document.querySelectorAll(".follow-form").forEach((form) => {
    form.addEventListener("submit", function () {
      const scrollY = window.scrollY;
      sessionStorage.setItem("scrollPosition", scrollY);
    });
  });

  // フォロー解除ボタンクリックイベントを捕捉
  document.querySelectorAll(".unfollow-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const scrollY = window.scrollY;
      sessionStorage.setItem("scrollPosition", scrollY);
    });
  });

  // ページ読み込み後、保存されたスクロール位置に移動
  const savedScrollPosition = sessionStorage.getItem("scrollPosition");
  if (savedScrollPosition) {
    window.scrollTo(0, parseInt(savedScrollPosition));
    sessionStorage.removeItem("scrollPosition");
  }
});
