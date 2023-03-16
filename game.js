window.onload = function () {
    let start = false;
    let score = 0;
    let once = 0;
    document.querySelector(".example").innerText = score;

    document.getElementById("start").addEventListener("mouseover", () => {
        document.querySelectorAll(".boundary").forEach((boundary) => {
            boundary.addEventListener("mouseover", () => {
                document.querySelectorAll(".boundary").forEach((boundary) => {
                    boundary.classList.add("youlose");
                    once += 6;
                    if (once == 6) {
                        start = false;
                        updateTextandScore("Ouppss! You Lost.", score - 10);
                    }
                });
            });
        });
    });


    let div = document.getElementById('start');
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    div.addEventListener('mousedown', function (e) {
        isDragging = true;

        offset.x = e.clientX - div.offsetLeft;
        offset.y = e.clientY - div.offsetTop;
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            div.style.left = (e.clientX - offset.x) + 'px';
            div.style.top = (e.clientY - offset.y) + 'px';
        }
    });

    document.addEventListener('mouseup', function (e) {
        isDragging = false;
    });

    document.getElementById("start").addEventListener("click", () => {
        const endRect = document.getElementById('end').getBoundingClientRect();
        const startRect = document.getElementById('start').getBoundingClientRect();

        if (startRect.right >= endRect.left &&
            startRect.left < endRect.right &&
            startRect.bottom >= endRect.top &&
            startRect.top <= endRect.bottom) {
            updateTextandScore("You Won.", score + 5);
        }

        if (!start) {   
            document.getElementById("start").addEventListener("click", () => {
                document.querySelectorAll(".boundary").forEach((boundary) => {
                    boundary.classList.remove("youlose");
                });
                once = 0;
                start = true;
                updateTextandScore("Begin by moving your mouse over the \"S\" ", 0);
                resetPosition();
            });
        }
    });

    const updateTextandScore = (text, score) => {
        document.getElementById("status").innerText = text;
        document.getElementsByClassName("example")[0].innerText = score;
    }

    const resetPosition=()=>{
        document.getElementById("start").style.left = "0px";
        document.getElementById("start").style.top = "205px";
    }
}