const leftMenu = document.querySelector('.left-menu');

leftMenu.addEventListener('click', (e)  => {
       const classMenu = e.target.classList;
       // Select container
       const container = document.querySelector('.page');
       const leftArrow = document.querySelector('.fa-arrow-left');
       const rightArrow = document.querySelector('.fa-arrow-right');

       if(classMenu.contains('fa-arrow-left') ) {
            // close menu
            container.classList.add('no-menu');
            e.target.style.display = 'none';
            rightArrow.style.display = 'block';
       } else if( classMenu.contains('fa-arrow-right')) {
            container.classList.remove('no-menu');
            e.target.style.display = 'none';
            leftArrow.style.display = 'block';
       }
});

