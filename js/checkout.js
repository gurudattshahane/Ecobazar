$(document).ready(function () {
    const selectBtn = $(".select-button");
    const optionsList = $(".select-dropdown li");
  
    // add click event to select button
    $(selectBtn).on("click", function(e){
      // add/remove active class on the container element
      $(this).parent('.custom-select').toggleClass("active");
      // update the aria-expanded attribute based on the current state
      $(this).attr(
        "aria-expanded",
        $(this).attr("aria-expanded") === "true" ? "false" : "true"
      );
    });
  
    $(optionsList).each((index, option) => {
      function handler(e) {
        // Click Events
          console.log(option);
        if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
          $(this).parents(".custom-select").find(".selected-value").text($(this).children('input').val());
          $(this).parents(".custom-select").removeClass("active");
        }
        // Key Events
        if (e.key === "Enter") {
          $(this).parents(".custom-select").find(".selected-value").text($(this).children('input').val());
          $(this).parents(".custom-select").removeClass("active");
        }
      }
  
      $(option).on("keyup", handler);
      $(option).on("click", handler);
    });
});