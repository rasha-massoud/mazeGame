window.onload = function () {
    var start = false;
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
        console.log(start, "HIIIIII");
        document.getElementById("start").addEventListener("click", () => {
            document.querySelectorAll(".boundary").forEach((boundary) => {
                boundary.style.backgroundColor = "#eeeeee";
                start = true;
                document.getElementById("status").innerText = "Begin by moving your mouse over the \"S\" ";
            });
        });
    }




}