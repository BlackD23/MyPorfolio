function Toggle() {
    const dropdown = document.getElementById("mb-down");

    if(dropdown.style.display === "none") {
        dropdown.style.display = "";
    } else {
        dropdown.style.display = "none";
    }
}