// Grab hamburger menu
let menuIcon = document.getElementById('hamburger');
// 
menuIcon.addEventListener('click', showMenu);

function showMenu() {
  // if the collapsible menu is already open
  let smallMenu = document.getElementById('sm-menu')
  if (smallMenu){
    smallMenu.remove();
    return;
  }
  
  let links = ["Agriculture","Technology","Construction","Hands-On"];

  let pageList = document.createElement('ul');
  pageList.setAttribute("id","sm-menu");

  let formattedLinks = links.map((item)=>{
    // create anchor tags
    let link = document.createElement('a');
    link.setAttribute("href",`${item.toLowerCase()}.html`);
    link.setAttribute("class","sm-menu");
    link.innerText = item;

    // add anchor tags to links
    let listItem = document.createElement('li');
    listItem.appendChild(link);
    listItem.style.listStyleType = "none";
    listItem.style.textAlign = "right";

    
    return listItem;
  });

  formattedLinks.forEach(item => {
    pageList.appendChild(item);
  });
    
    let navWindow = document.querySelector('nav');
    
    navWindow.append(pageList);
}