


    document.body.style.background = "url('front-end/images/everyone_is_welcome.jpg')";


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
	const ctaContent = document.querySelectorAll('.slideshow-container .text button'); /*change button tex*/
	
  headerContent[0].innerText = 'Heading Content 1';
  imageContent[0].src = 'https://via.placeholder.com/640x180'; /*change image*/
	pContent[0].innerText = 'repellat qui, modi, sapiente odio recusandae, adipisci voluptate ipsum praesentium laborum.';
	ctaContent[0].innerText = 'Read more...';
	
  headerContent[1].innerText = 'Heading Content 2';
  imageContent[1].src = 'https://via.placeholder.com/640x180'; /*change image*/
	pContent[1].innerText = 'Omnis officiis eius tempore itaque quae, ut aspernatur? Aperiam reiciendis excepturi ';
	ctaContent[1].innerText = 'Read more...';
	 
  headerContent[2].innerText = 'Heading Content 3';
  imageContent[2].src = 'https://via.placeholder.com/640x180'; /*change image*/
	pContent[2].innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';
	ctaContent[2].innerText = 'Read more...';})(window)

