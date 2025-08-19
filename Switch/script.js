const switches = document.querySelectorAll(".switch");

    switches.forEach(sw => {
      sw.addEventListener("click", () => {
        // Turn all switches OFF (beige background + faded emoji)
        switches.forEach(other => {
          other.classList.remove("on");
          other.classList.add("off");
          let label = other.parentElement.querySelector(".label");
          label.textContent = "OFF";
        });

        // Turn ON clicked switch
        sw.classList.remove("off");
        sw.classList.add("on");
        let label = sw.parentElement.querySelector(".label");
        label.textContent = "ON";
      });
    });