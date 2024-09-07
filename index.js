let screenLog = document.querySelector(".circle");
document.addEventListener("mousemove", logKey);

function logKey(e) {
    screenLog.setAttribute(
        "style", `top: ${e.clientY-25}px; left: ${e.clientX-25}px;`
    );
}

let rectangle = document.querySelector(".rectangle");
let currentX = 0;
let currentY = 0;
let isDragging = false;
document.addEventListener("mousedown", holdButton);
document.addEventListener("mousemove", onMove);
document.addEventListener("mouseup", releaseButton);

function holdButton(e) {
    currentX = e.clientX;
    currentY = e.clientY;
    isDragging = true;
    console.log(`Initial X: ${currentX}; Initial Y: ${currentY}`);
}

function releaseButton(e) {
    isDragging = false;
    currentX = e.clientX;
    currentY = e.clientY;
    console.log(`Final X: ${currentX}; Final Y: ${currentY}`);
    rectangle.setAttribute(
        "style", `top: ${e.clientY}px; left: ${e.clientX}px;`
    );
}

function onMove(e) {
    if (isDragging) {
        console.log(rectangle);
        let positionX = `${e.clientX - currentX}px`;
        let positionY = `${e.clientY - currentY}px`;

        console.log(`Middle X: ${e.clientX}; Middle Y: ${e.clientY}`);

        rectangle.setAttribute(
            "style", `top: ${e.clientY}px; left: ${e.clientX}px;`
        );
    }
}