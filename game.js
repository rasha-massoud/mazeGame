window.onload = function () {
    var start = false;
    var score = 0;
    document.getElementsByClassName("example")[0].innerText = score;

    document.getElementById("start").addEventListener("mouseover", () => {
        document.querySelectorAll(".boundary").forEach((boundary) => {
            boundary.addEventListener("mouseover", () => {
                document.querySelectorAll(".boundary").forEach((boundary) => {
                    boundary.style.backgroundColor = "#ff8888";
                    document.getElementById("status").innerText = "Ouppss! You Lost.";
                    start = false;
                    console.log(start);


                });

            });
        });
    });
    if (start == false) {
        document.getElementById("start").addEventListener("click", () => {
            document.querySelectorAll(".boundary").forEach((boundary) => {
                boundary.style.backgroundColor = "#eeeeee";
                start = true;
                document.getElementById("status").innerText = "Begin by moving your mouse over the \"S\" ";
            });
            score -= 10;
            document.getElementsByClassName("example")[0].innerText = score;

        });
    }

    var div = document.getElementById('start');
    var isDragging = false;
    var offset = { x: 0, y: 0 };

    // Add mousedown event listener to the div
    div.addEventListener('mousedown', function (e) {
        isDragging = true;

        // Calculate the offset between the mouse position and the div position
        offset.x = e.clientX - div.offsetLeft;
        offset.y = e.clientY - div.offsetTop;
    });

    // Add mousemove event listener to the document
    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            // Update the position of the div to follow the mouse
            div.style.left = (e.clientX - offset.x) + 'px';
            div.style.top = (e.clientY - offset.y) + 'px';
        }
    });

    // Add mouseup event listener to the document
    document.addEventListener('mouseup', function (e) {
        isDragging = false;
    });


}