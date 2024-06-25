
const yearEl=document.querySelector(".year");

const currentYear=new Date().getFullYear();

yearEl.textContent=currentYear;


const btnNavEl=document.querySelector('.btn-mobile-nav');

const  headerEl=document.querySelector('.header');

btnNavEl.addEventListener('click', function(){

    headerEl.classList.toggle("nav-open")


})


const allLink=document.querySelectorAll('a');


allLink.forEach(function(link){

    link.addEventListener('click',function(e){

        e.preventDefault();
        const href=link.getAttribute('href');

        if(href==="#") window.scrollTo({
            top:0,
             behavior:"smooth",
        }) 

        if(href !="#" && href.startsWith("#"))
            {

               const scrollEl=document.querySelector(href);

               scrollEl.scrollIntoView({behavior:"smooth"})
            }

            
        if(link.classList.contains('main-nav-link')) headerEl.classList.toggle("nav-open")




    })




})

         const sectionEl= document.querySelector('.section-hero');

         const oberserver= new IntersectionObserver(function(entries){

            const ent=entries[0];

            if(ent.isIntersecting==false){


                document.body.classList.add('sticky');


            }else{

                document.body.classList.remove('sticky');
            }


         },{
            root:null,
            threshold:0,
            rootMargin:"-80px",
         })

         oberserver.observe(sectionEl);


