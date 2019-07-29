


    document.body.style.background = "url('front-end/images/sky3.jpg')";

//fixed Navigation bar 
    const nav = document.querySelector('#main');
    let topOfNav = nav.offsetTop;

    function fixNav() {
      if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
      }
    }

    window.addEventListener('scroll', fixNav);




var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

(function(global){
  const slides = document.querySelectorAll('.slideshow-container img.slide');
  // change images
	slides[0].src = 'https://images.unsplash.com/photo-1526817575615-3685e135615d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1888&q=80';
	slides[1].src = 'https://images.unsplash.com/photo-1551556729-c8dee4337009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80';
	slides[2].src = 'https://images.unsplash.com/photo-1467510396478-c4680a636614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80';
	
  const headerContent = document.querySelectorAll('.slideshow-container .text h2');
  const imageContent = document.querySelectorAll('.slideshow-container .text img');
	const pContent = document.querySelectorAll('.slideshow-container .text p');
	const ctaContent = document.querySelectorAll('.slideshow-container .text button'); /*change button text*/
  // const ctaButton = document.getElementsByClassName('.slideshow-container .text cta'); 
  
  
  headerContent[0].innerText = 'Scraps of Life';
  imageContent[0].src = 'front-end/images/scraps_of_life.jpg'; /*change image*/
	pContent[0].innerText = 'Imagine the filthy, toxic mess all around you. Feel it on your skin.Imagine eating here.Now open your eyes and see all the people who live here.';
  pContent[0].style.fontSize = 'large';
  ctaContent[0].innerText = 'Read more...';
  ctaContent[0].style.fontSize = "large";
  ctaContent[0].style.background = "#988488";
  ctaContent[0].style.cursor = "pointer";
  ctaContent[0].style.borderRadius = "12px";
  ctaContent[0].style.borderColor = "#3486eb";
  ctaContent[0].style.boxShadow = "0 4px 16px 0 #3486eb";


  
  headerContent[1].innerText = 'War Widow';
  imageContent[1].src = 'front-end/images/widow.png'; /*change image*/
	pContent[1].innerText = 'She remembers telling him: “I don’t want to lose you. I don’t want my kids to grow up without a father.';
  pContent[1].style.fontSize = 'large';
  ctaContent[1].innerText = 'Read more...';
  ctaContent[1].style.fontSize = "large";
  ctaContent[1].style.background = "#988488";
  ctaContent[1].style.cursor = "pointer";
  ctaContent[1].style.borderRadius = "12px";
  ctaContent[1].style.borderColor = "#3486eb";
  ctaContent[1].style.boxShadow = "0 4px 16px 0 #3486eb";

	 
  headerContent[2].innerText = 'A Lifestyle Lost';
  imageContent[2].src = 'front-end/images/lifestyle_lost.png'; /*change image*/
	pContent[2].innerText = 'Bombs and artillery shells are equally lethal to rich and poor, and among the more than 2.3 million Syrian refugees are many wealthy Syrians who have had family slaughtered. ';
  pContent[2].style.fontSize = 'large';
  ctaContent[2].innerText = 'Read more...';
  ctaContent[2].style.fontSize = "large";
  ctaContent[2].style.background = "#988488";
  ctaContent[2].style.cursor = "pointer";
  ctaContent[2].style.borderRadius = "12px";
  ctaContent[2].style.borderColor = "#3486eb";
  ctaContent[2].style.boxShadow = "0 4px 16px 0 #3486eb";})(window);

  // document.querySelectorAll('a').forEach(e => e.addEventListener('mouseover', a => a.path[0].style.color = '#1d7539'));
  // document.querySelectorAll('a').forEach(e => e.addEventListener('mouseleave', a => a.path[0].style.color = 'black'));
  //linking to stories.html
  // document.getElementsByClassName("cta").addEventListener("click", function () {
  //   window.location = "stories.html";
  // });
  
  // ctaButton.addEventListener("click", function(){window.location.assign("stories.html")});
  // ctaButton.addEventListener("click", RespondClick); 

  // ctaContent.addEventListener("click", function (evt) {
  //   evt.preventDefault();  
  // window.location.replace("stories.html");
  // return false;
  // });
  // function RespondClick() { 
  //     document.getElementsByClassName("cta").innerHTML += 
  //               "stories.html"; 
  // } 

