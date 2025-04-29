const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
//
$(document).ready(function () {
  $(".imginfo__title").each(function () {
    var $this = $(this);
    var originalText = $this.text();
    var target = parseInt(originalText.replace("+", ""));
    var current = 0;
    var increment = target / 30;

    // Set initial value to 0
    $this.text("0+");

    var timer = setInterval(function () {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
        $this.text(originalText); // Restore original formatting
      } else {
        $this.text(Math.floor(current) + "+");
      }
    }, 50);
  });
});
