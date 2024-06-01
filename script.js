function setTitle(id){
    // console.log(id);
    if(id!==""){
        localStorage.setItem("title",document.getElementById(id).value);
    }
    if(localStorage.title){
        document.querySelector("title").innerHTML = localStorage.title;
    }else{
        localStorage.title = "The Atlas";
        document.querySelector("title").innerHTML = "The Atlas";
    }
}
function setFav(id){
    // console.log(id);
    
    
    
    if(id!==""){
        localStorage.fav = document.getElementById(id).value;
    }
    if(localStorage.fav){
        document.getElementById("favicon").href = localStorage.fav;
    }
}
function getAllCookies(){
    document.getElementById("cookieGetOutput").innerHTML=document.cookie;
}
function tabPreset(index){  
    const presetList=[["Home | Schoology","https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico"],["My Drive - Google Drive","https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png"]];

    localStorage.fav =  presetList[index][1];
    document.getElementById("favicon").innerHTML = localStorage.fav;
    localStorage.title = presetList[index][0];
    document.querySelector("title").innerHTML = localStorage.title;
}
function schoolPreset(){
    tabPreset(0);
}
function drivePreset(){
    tabPreset(1);
}
setTitle("");
setFav("");
setInterval