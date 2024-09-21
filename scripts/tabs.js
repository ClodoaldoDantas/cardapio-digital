const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".product-list");

function handleActiveTab(event) {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  const currentTab = event.currentTarget;
  currentTab.classList.add("active");

  const sectionId = currentTab.dataset.content;

  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", handleActiveTab);
});
