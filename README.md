# Landing Page Project
## Steps:
- Git clone the udacity/fend [starter project] (https://github.com/udacity/fend/tree/refresh-2019) from github.
- Open the folder using visual Studio Code.
- Link the js file to html file by adding <script src="js/app.js"></script> before </body> tag.
- ### Then start editing in the app.js

    - #### build the nav and scroll to section

    - I have used the document.querySelectorAll(section) methode to get array of all sections in the DOM.
    - Select the ul element using the document.querySelector('ul').
    - Select the nav element using the document.querySelector('nav').
    - Then create function dynamicNavItemGeneration() where I have used the for of loop to loop on each section in sections array.
    - For each section in the sections array I have created li item using document.createElement('li') methode.
    - Get the section id value for each section by section.getAttribute('id') methode.
    - Append the li item as ul element child using element.appendChild() methode.
    - Create anchor element document.createElement('a') methode.
    - Assign the href of anchor to be the section #id using anchor.setAttribute('href','#'+idValue).
    - Get section data-nav value as it is going to be the anchor textcontent using section.getAttribute('data-nav').
    - Letting The anchor text content carries the data(value) by using anchor.textContent property.
    - Append anchor to the li element using element.appendChild() methode.
    - call the scroll function in dynamicNavItemGeneration() function.

    - #### Finally called the dynamicNavItemGeneration() function to get excuted.

    - #### Add funtion to scroll smoothly
    
    - Create scroll function where I added enent listener to scroll smoothly.
    -  Event listener to every anchor once it is clicked with anchor.addEventListener('click',function(event){} methode
    - To prevent the anchor scroll default behavior which is auto using event.preventDefault() methode.
    - To scroll smoothly throw the page I have used section.scrollIntoView({behavior:'smooth'}) methode.
    
    - #### Add class 'active' to section when near top of viewport

    - Create fuction active() where I have added event listener to scroll event in document.
    - Event listener fuction have for section of sections to loop on each section.
    - I get the section position reletive to the viewport for each section using section.getBoundingClientRect() methode.
    - Put condition when section is in the viewport add class='active' to the section and if the section isn't in viewport remove class='active' from it.
    - get the section data-nav attribute using get attribute.
    - call activeAnchor(dataValue) function.
    - Then called the active() function.

    - #### color the active nav item

    - Create function activeAnchor()
    - select all anchors using document.queeySelectors() methode.
    - loop over anchors
    - add condition if (anchor.textcontent=== dataValue) then add class='active-link' els remove the class='active-link'



- ### Then edit in html file (index.html) 

    - Change the class attribute value to active for the first section.
    - number of changes in the html structure and text content.
    - add to images.
    - add facebook icon image in anchor to take you to facebook page.


- ### Finally editing the css file (styles.css)

    - Change the class name to active.
    - .navbar__menu ul{display:flex; justify-content: space-around; height: 50px; align-items: center;}
    - li a{text-decoration: none; border-left: 2px solid #cc1;}
    - section:nth-of-type(even) .landing__container {text-align: left;}
    - section {display: flex; align-items: center;}
    - .landing__container {align-self: start;}
    - .active-link{color:#cc1;}
    










"# landpage" 
