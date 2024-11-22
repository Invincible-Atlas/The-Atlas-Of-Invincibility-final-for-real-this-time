fetch("config/pages.json").then((res) => {
  if (res.ok) {
    return (res.json());
  } else {
    console.error("navbar.js: Fetch error " + res.status);
  }
}).then((json)=>{
  const navbarContainer = document.getElementsByClassName("navbarTop")[0];
  if(navbarContainer!==""&&navbarContainer!==null&&navbarContainer!==undefined){
    json.forEach((value,index,array) => {
      let navlink = document.createElement("a");
      navlink.classList="navlink navlinkTop";
      navlink.innerHTML = value.name;
      navlink.href = value.link;
      navbarContainer.appendChild(navlink);
    });
  }else{
    console.error("navbar.js: No navbar container")
  }
    
})
