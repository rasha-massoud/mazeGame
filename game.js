window.onload = function () {
    let start = false;
    let score = 0;
    let updated = false;
    document.querySelector(".example").innerText = score;

    document.getElementById("start").addEventListener("mouseover", () => {
        document.querySelectorAll(".boundary").forEach((boundary) => {
            boundary.addEventListener("mouseover", () => {
                document.querySelectorAll(".boundary").forEach((boundary) => {
                    boundary.classList.add("youlose");
                    document.getElementById("status").innerText = "Ouppss! You Lost.";
                    start = false;
                });
                updated = true;

            });
        });
        // if (updated) {
        //     score -= 10;
        //     document.getElementsByClassName("example")[0].innerText = score;
        //     // updated = false;
        // }
    });

    // if (start == false) {
    //     document.getElementById("start").addEventListener("click", () => {
    //         document.querySelectorAll(".boundary").forEach((boundary) => {
    //             boundary.style.backgroundColor = "#eeeeee";
    //             start = true;
    //             document.getElementById("status").innerText = "Begin by moving your mouse over the \"S\" ";
    //         });

    //         //CONVERT THE ABOVE TO FUNCTION
    //         score = 0;
    //         document.getElementsByClassName("example")[0].innerText = score;

    //     });
    // }

    // //UPDATE NOT TO GET OUT FROM THE MAZEEE
    // let div = document.getElementById('start');
    // let isDragging = false;
    // let offset = { x: 0, y: 0 };

    // // Add mousedown event listener to the div
    // div.addEventListener('mousedown', function (e) {
    //     isDragging = true;

    //     // Calculate the offset between the mouse position and the div position
    //     offset.x = e.clientX - div.offsetLeft;
    //     offset.y = e.clientY - div.offsetTop;
    // });

    // // Add mousemove event listener to the document
    // document.addEventListener('mousemove', function (e) {
    //     if (isDragging) {
    //         // Update the position of the div to follow the mouse
    //         div.style.left = (e.clientX - offset.x) + 'px';
    //         div.style.top = (e.clientY - offset.y) + 'px';
    //     }
    // });

    // // Add mouseup event listener to the document
    // document.addEventListener('mouseup', function (e) {
    //     isDragging = false;
    // });

    // const endRect = document.getElementById('end').getBoundingClientRect();
    // const startRect = document.getElementById('start').getBoundingClientRect();

    // document.getElementsByTagName("body")[0].addEventListener("click", () => {
    //     let endRect = document.getElementById('end').getBoundingClientRect();
    //     let startRect = document.getElementById('start').getBoundingClientRect();

    //     const isOverlap = !(
    //         endRect.left > startRect.right &&
    //         endRect.left < startRect.right + 0.5
    //     );
    //     // console.log(endRect.left, startRect.right, endRect.right, startRect.left, endRect.top, startRect.bottom, endRect.bottom, startRect.top);
    //     if (isOverlap) {  //ANOTHER FLAG like start
    //         document.getElementById("status").innerText = "You Won. "; //STOP GAME THEN SCORE
    //         // score += 5;
    //         document.getElementsByClassName("example")[0].innerText = score;
    //     }
    // });
}