function updateForm() {
    const bookingType = document.getElementById("bookingType").value;
    const slotSection = document.getElementById("slotSection");
    const timeInput = document.getElementById("time");
    const dateInput = document.getElementById("date");

    if (bookingType === "fullday") {
        slotSection.style.display = "none";
    } else if (bookingType === "halfday") {
        slotSection.style.display = "block";
    } else {
        slotSection.style.display = "none";
    }
}
