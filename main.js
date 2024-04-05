const video = document.getElementById('videoPlayer');
    const qualitySelector = document.getElementById('qualitySelector');

    qualitySelector.addEventListener('change', function() {
        const selectedQuality = qualitySelector.value;
        if (selectedQuality === '360') {
            video.style.width = '640px';
        } else if (selectedQuality === '480') {
            video.style.width = '854px';
        } else if (selectedQuality === '720') {
            video.style.width = '1280px';
        }
    });

    video.addEventListener('error', function() {
        alert('Error loading the video');
    });