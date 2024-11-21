let shareSection = document.querySelector(".btn-active");
    shareSection.style.display = "none";
    let isShareVisible = false;

    function showShare() {
        if (isShareVisible) {
            shareSection.style.display = "none";
            isShareVisible = false;
        } else {
            shareSection.style.display = "flex";
            isShareVisible = true;
        }
    }