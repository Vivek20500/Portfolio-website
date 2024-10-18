const menu=document.querySelector('.hamburger');

menu.addEventListener('click',()=>{
    document.querySelector('header').classList.toggle('show')
})

// const observer=new IntersectionObserver(e=>{
//     e.forEach(entry=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add('shown');
//         }
//         else{
//             entry.target.classList.remove('shown');
//         }
//     })
// })

// const animate=document.querySelectorAll('.animate')
// animate.forEach(e=>{
//     observer.observe(e)
// })

// const observer2=new IntersectionObserver(e=>{
//     e.forEach(entry=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add('shown2');
//         }
//         else{
//             entry.target.classList.remove('shown2');
//         }
//     })
// })

// const animateLogo=document.querySelectorAll('.animate2')
// animateLogo.forEach(e=>{
//     observer2.observe(e)
// })


// const observer3=new IntersectionObserver(e=>{
//     e.forEach(entry=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add('shown3');
//         }
//         else{
//             entry.target.classList.remove('shown3');
//         }
//     })
// })

// const animateText=document.querySelectorAll('.animate3')
// animateText.forEach(e=>{
//     observer3.observe(e)
// })


// const scrolled=document.querySelectorAll('.scroll');
// window.addEventListener('scroll',()=>{
//     var sv=0;
//     sv=window.scrollY;
//     scrolled.forEach((e,i)=>{
//         if(sv>=0 && sv<710){
//             e.classList.remove("active")
//             scrolled[0].classList.add("active")
//         }else if(sv>=710 && sv<1630){
//             e.classList.remove("active")
//             scrolled[1].classList.add("active")
//         }else if(sv>=1630 && sv<2240){
//             e.classList.remove("active")
//             scrolled[2].classList.add("active")
//         }else if(sv>=2240 && sv<2800){
//             e.classList.remove("active")
//             scrolled[3].classList.add("active")
//         }else if(sv>=2800){
//             e.classList.remove("active")
//             scrolled[4].classList.add("active")
//         }
//     })
// })


// if(screen.width<750){
//     scrolled.forEach(e=>{
//         e.addEventListener('click',()=>{
//              document.querySelector('header').classList.toggle('show')
//         })
//     })

//     window.addEventListener('scroll',()=>{
//         var sv=0;
//         sv=window.scrollY;
//         scrolled.forEach((e,i)=>{
//             if(sv>=0 && sv<445){
//                 e.classList.remove("active")
//                 scrolled[0].classList.add("active")
//             }else if(sv>=445 && sv<1060){
//                 e.classList.remove("active")
//                 scrolled[1].classList.add("active")
//             }else if(sv>=1060 && sv<1670){
//                 e.classList.remove("active")
//                 scrolled[2].classList.add("active")
//             }else if(sv>=1670 && sv<=2280){
//                 e.classList.remove("active")
//                 scrolled[3].classList.add("active")
//             }else if(sv>=2280){
//                 e.classList.remove("active")
//                 scrolled[4].classList.add("active")
//             }
//         })
//     })
// }