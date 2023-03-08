window.onload = function () {

    document.getElementById("start").addEventListener("mouseover", () => {
        const start = true;
        document.querySelectorAll(".boundary").forEach((boundary) => {
            boundary.addEventListener("mouseover", () => {
                document.querySelectorAll(".boundary").forEach((boundary) => {
                    boundary.classList.add("youlose");
                });
            });
        });

    })




}