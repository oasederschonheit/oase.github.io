function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.addEventListener('resize', function() {
    var carousel = document.getElementById('carousel');
    var videoElement = document.createElement('video');
    videoElement.setAttribute('muted', '');
    videoElement.innerHTML = '<source src=img/IMG_7087.MP4" type="video/mp4">';
    
    if (window.innerWidth < 680) {
        carousel.innerHTML = '';
        container.appendChild(videoElement);
    } else {
        carousel.innerHTML = "<div id='carouselExampleControls' class='carousel slide'><div class='carousel-inner'><div class='carousel-item active'><video id='myVideo' height='600' autoplay muted loop controls><source src='img/IMG_7087.MP4' type='video/mp4'><source src='img/IMG_7087.ogg' type='video/ogg'> Your browser does not support the video tag.</video></div><div class='carousel-item'><video id='myVideo' height='600' autoplay muted loop controls<source src='img/IMG_7078.MP4' type='video/mp4'> Your browser does not support the video tag. </video></div></div><button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev'> <span class='carousel-control-prev-icon' aria-hidden='true''></span><span class='visually-hidden'>Previous</span></button><button class='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next'><span class='carousel-control-next-icon' aria-hidden='true'></span><span class='visually-hidden'>Next</span></button></div>";
    }
});


