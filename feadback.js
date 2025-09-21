document.addEventListener("DOMContentLoaded", function() {
    const removeBtn = document.getElementById("removeBtn");
    const submitBtn = document.getElementById("submitBtn");
    const form = document.getElementById("feedbackForm");

    // Remove button confirmation
    removeBtn.addEventListener("click", function(event) {
        const confirmRemove = confirm("Are you sure you want to remove?");
        if (!confirmRemove) {
            event.preventDefault(); // Stop action if "Cancel"
        }
    });

    // Submit button validation
    submitBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Stop form submission first

        // Get required fields
        const requiredFields = form.querySelectorAll("input[required], select[required]");
        let firstEmpty = null;
        let allFilled = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                allFilled = false;
                field.style.border = "2px solid red"; // Highlight empty
                if (!firstEmpty) {
                    firstEmpty = field; // Save first empty field
                }
            } else {
                field.style.border = ""; // Remove red if filled
            }
        });

        if (!allFilled) {
            alert("Please fill in all required details before submitting.");
            firstEmpty.scrollIntoView({ behavior: "smooth", block: "center" });
            firstEmpty.focus();
        } else {
            alert("Submitted successfully!");
            form.submit(); // Now submit
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const removeBtn = document.getElementById("removeBtn");
  const submitBtn = document.getElementById("submitBtn");
  const form = document.getElementById("feedbackForm");

  // Remove button confirmation
  removeBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to clear the form?")) {
      form.reset();
      alert("Form cleared successfully!");
    }
  });

  // Submit button validation
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent auto-submit
    const requiredFields = form.querySelectorAll("input[required], select[required]");
    let allFilled = true;
    let firstEmpty = null;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.style.border = "2px solid red";
        allFilled = false;
        if (!firstEmpty) firstEmpty = field;
      } else {
        field.style.border = "";
      }
    });

    if (!allFilled) {
      alert("Please fill in all required details before submitting.");
      firstEmpty.scrollIntoView({ behavior: "smooth", block: "center" });
      firstEmpty.focus();
    } else {
      alert("Submitted successfully!");
      form.submit();
    }
  });
});