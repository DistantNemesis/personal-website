var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '195',
        width: '320',
        videoId: 'M7lc1UVf-VE', // Replace with your YouTube video ID
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'loop': 1,
            'listType': 'playlist',
            'list': 'PLplXQ2cg9B_qrCVd1J_iId5SvP8Kf_BfS' // Replace with your playlist ID
        },

    });
}