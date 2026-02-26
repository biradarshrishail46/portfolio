document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    if(name.length < 3){
        alert("Name must be at least 3 characters");
        return;
    }

    alert("Form submitted successfully!");
});