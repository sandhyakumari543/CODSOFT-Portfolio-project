window.onload = function () {
    document.getElementById("download").addEventListener("click", () => {
        const myResume = document.getElementById("myResume");
        console.log(myResume);
        console.log(window);
        html2pdf().from(myResume).save();
    });
}