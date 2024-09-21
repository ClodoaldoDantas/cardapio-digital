const time = document.querySelector("#time");

function checkStatusStore() {
  const startingHour = 8;
  const endingHour = 18;

  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const storeIsOpen = currentHour >= startingHour && currentHour < endingHour;

  if (storeIsOpen) {
    time.style.backgroundColor = "#16a34a";
  } else {
    time.style.backgroundColor = "#ef4444";
  }
}

window.addEventListener("load", checkStatusStore);
