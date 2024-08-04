document.addEventListener("DOMContentLoaded", function() {
    const text = "The zany medical scientist now mastering data and integrating technologies!";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            document.getElementById("typed-text").textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }

    typeText();
});
