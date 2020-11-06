/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
const startPreformance= performance.now();
//Global variables
const sections= document.querySelectorAll('section');//sections is an array contains all the sections in the page.
const ul= document.querySelector('ul');//select the ul element.
const nav= document.querySelector('nav');//select nav element.




// build the nav and scroll to section
function dynamicNavItemGeneration()
{
    for(const section of sections)
    {
        const navItem= document.createElement('li');//for each section in the sections array I will create li item.
        const idValue= section.getAttribute('id');//get the section id value.
        ul.appendChild(navItem);//append the li item as ul element child.
        const anchor= document.createElement('a');//create anchor element.
        anchor.setAttribute('href','#'+idValue);// put the href of anchor to be the section #id.
        const Text= section.getAttribute('data-nav');//get section data-nav value as it is going to be the anchor textcontent.
        anchor.textContent= Text;//the anchor text content carries the data(value).
        navItem.appendChild(anchor);//append anchor to the li element. 
        scroll(section,anchor);//call scroll function.
    }; 
}
dynamicNavItemGeneration();//call the function to get excuted.


// sroll funtion to scroll smoothly.
function scroll(section,anchor)
{
    anchor.addEventListener('click',function(event)//create event listener to every anchor once it is clicked.
    {
        event.preventDefault();//to prevent the anchor scroll default behavior which is auto.
        section.scrollIntoView(
        {
            behavior:'smooth'//to scroll smoothly throw the page.
        });
    });  

}
  
// Add class 'active' to section when near top of viewport
function active()
{   
    document.addEventListener('scroll',function ()  
    {  
        for(const section of sections)
        {
            const pos= section.getBoundingClientRect();//get the section position reletive to the viewport
            if(pos.bottom> 0 && pos.bottom <= screen.height)//condition when section is in the viewport add class='active'
            {
                section.classList.add('active');
                const dataValue = section.getAttribute('data-nav');
                activeAnchor(dataValue);
            }
            else//if the section isn't in viewport remove class='active' 
            {
                section.classList.remove('active');
            } 
        }
    });
}
active();//call the active function

//function to loop on all anchors and the one with href value = active section(class='active') data-nav attribute value will have #cc1 color
function activeAnchor(dataValue)
{   
    const anchors = document.querySelectorAll('a');//array of all anchor elemnets in DOM.
    for(const anchor of anchors)
    {
        if (anchor.textContent===dataValue)
        {
            anchor.classList.add('active-link');
        }
        else
        {
            anchor.classList.remove('active-link');
        }
    } 
}

const endPreformance= performance.now();

