(function () {
  "use strict";

  var controlGroups = document.querySelectorAll("[data-filter-controls]");

  Array.prototype.forEach.call(controlGroups, function (controls) {
    var targetId = controls.getAttribute("data-filter-controls");
    var target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    var buttons = controls.querySelectorAll("[data-filter]");
    var items = target.querySelectorAll("[data-filter-item]");

    Array.prototype.forEach.call(buttons, function (button) {
      button.addEventListener("click", function () {
        var selected = button.getAttribute("data-filter");

        Array.prototype.forEach.call(buttons, function (candidate) {
          var isActive = candidate === button;
          candidate.classList.toggle("active", isActive);
          candidate.setAttribute("aria-pressed", isActive ? "true" : "false");
        });

        Array.prototype.forEach.call(items, function (item) {
          var category = item.getAttribute("data-category");
          item.classList.toggle("is-hidden", selected !== "all" && category !== selected);
        });
      });
    });
  });
})();
