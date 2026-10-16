document.addEventListener("DOMContentLoaded", function() {
    const getStartedBtn = document.getElementById("getStartedBtn");
    const modal = document.getElementById("portalModal");
    const closeModal = document.getElementById("closeModal");

    if (getStartedBtn && modal && closeModal) {

        getStartedBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });

    }

});
