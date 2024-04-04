function updateForm() {
  const bookingType = document.getElementById("bookingType").value;
  const slotSection = document.getElementById("slotSection");
  const timeInput = document.getElementById("timeInput");
  const dateInput = document.getElementById("date");

  if (bookingType === "fullday") {
    slotSection.style.display = "none";
    timeInput.style.display = "none";
  } else if (bookingType === "halfday") {
    slotSection.style.display = "block";
    timeInput.style.display = "none";
  } else if (bookingType === "hourly") {
    slotSection.style.display = "none";
    timeInput.style.display = "block";
  } else {
    slotSection.style.display = "none";
    timeInput.style.display = "none";
  }
}
