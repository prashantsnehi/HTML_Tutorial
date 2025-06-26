function startTimer() {
    let count = 0;
    const timer = setInterval(() => {
        count++;
        document.getElementById("timer").innerHTML = `Timer: ${count} seconds`;
        document.getElementById("startTimer").value = `Timer: ${count} seconds`;
        document.getElementById("startTimer").setAttribute("disabled", "true");
        if (count >= 10) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Timer stopped after 10 seconds";
            document.getElementById("startTimer").value = `Start Timer`;
            document.getElementById("startTimer").removeAttribute("disabled");
        }
    }, 1000);
}
setInterval(() => {
    document.getElementById("clock").innerHTML = new Date().toLocaleTimeString();
}, 1000);