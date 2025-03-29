document.addEventListener("DOMContentLoaded", () => {
    let btn = document.createElement("button");
    btn.textContent = "Click Me";
    document.body.appendChild(btn);

    let div = document.createElement("div");
    div.id = "output";
    document.body.appendChild(div);

    btn.addEventListener("click", () => {
        div.textContent = "Button Clicked!";
        div.style.color = "blue";
    });
});

function showAlert() {
    alert("This is an alert!");
}

function getLocation() {
    let loc = window.location.href;
    console.log("Current URL:", loc);
}

function openNewTab() {
    window.open("https://www.google.com", "_blank");
}

function goBack() {
    history.back();
}

function reloadPage() {
    location.reload();
}

setTimeout(() => console.log("Executed after 3 seconds"), 3000);
