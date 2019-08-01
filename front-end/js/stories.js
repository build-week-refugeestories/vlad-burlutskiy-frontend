

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


    document.body.style.background = "url('front-end/images/seaM.jpg')";

    // Hiding and showing the full story
    document.querySelectorAll('.story-item p').forEach(story => {
        const fullStory = story.innerText;
        if(window.innerWidth < 2800){
        const shortStory = story.innerText.slice(0,1255) + '...(click for full story)';
        story.innerText = shortStory;
        story.addEventListener('click', p => p.path[0].innerText = fullStory);
        } else {
            story.innerText = fullStory;
        }
        });