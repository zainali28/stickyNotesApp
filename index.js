let screenLog = document.querySelector(".circle");
document.addEventListener("mousemove", logKey);

function logKey(e) {
    screenLog.setAttribute(
        "style", `top: ${e.clientY-25}px; left: ${e.clientX-25}px;`
    );
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
}
