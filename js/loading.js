document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loadingOverlay');

    const loadingTime = 1500; // 1.5 secondes

    window.addEventListener('load', function() {
        setTimeout(hideLoading, 500);
    });

    // Pour utiliser un timer fixe
    // setTimeout(hideLoading, loadingTime);

    function hideLoading() {
        loadingOverlay.classList.add('hidden');

        // Supprimer complètement l'overlay après l'animation
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }
});