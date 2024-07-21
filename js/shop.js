$(document).ready(function () {
  const customSelect = document.querySelector(".custom-select");
  const selectBtn = document.querySelector(".select-button");

  const selectedValue = document.querySelector(".selected-value");
  const optionsList = document.querySelectorAll(".select-dropdown li");

  // add click event to select button
  selectBtn.addEventListener("click", () => {
    // add/remove active class on the container element
    customSelect.classList.toggle("active");
    // update the aria-expanded attribute based on the current state
    selectBtn.setAttribute(
      "aria-expanded",
      selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });

  optionsList.forEach((option) => {
    function handler(e) {
      // Click Events
      if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
        selectedValue.textContent = this.children[1].textContent;
        customSelect.classList.remove("active");
      }
      // Key Events
      if (e.key === "Enter") {
        selectedValue.textContent = this.textContent;
        customSelect.classList.remove("active");
      }
    }

    option.addEventListener("keyup", handler);
    option.addEventListener("click", handler);
  });


  /* Setting price slider value */ 
  $('.filter-cta button').click(function(e){
    e.stopPropagation();
    $('.filter').toggleClass('filter-open');
  });

  $('#price-range').on('input', function(e){
    let slider_val = numberWithCommas($(this).val());
    $('.price-slider p span i').text(slider_val);
  });

  $(document).click(function(e){
    let filter = document.querySelector('.filter');
    if(filter.classList.contains('filter-open') & !filter.contains(e.target)){
      filter.classList.remove('filter-open');
    }
  });

});
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
