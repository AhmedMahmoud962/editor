// in google chrome you can use id in js directly
let blur=document.getElementById("blur")
let Reset=document.querySelector("span");
let ImgBox=document.querySelector(".imgBox");
const context =canves.getContext("2d");


function resetValue(){
    img.style.filter=''
    saturate.value="100";
    contrast.value="100";
    brightness.value="100";
    sepia.value="0";
    grayscale.value="0";
    blur.value="0";
    hueRotate.value="0";
}
// when page onload do this
onload=() => {
  download.style.display="none";
  Reset.style.display="none";
  ImgBox.style.display="none";
}
// upload img 
upload.onchange= ()=>{
    resetValue()
    download.style.display="block";
    Reset.style.display="block";
    ImgBox.style.display="block";
    
    let file = new FileReader(); //fileReader use to read files in your device 
    file.readAsDataURL(upload.files[0]);
    file.onload=()=>{
    img.src=file.result;

    }
    // take copy of img
    img.onload=function(){
        canves.width=img.width;
        canves.height=img.height;
        context.drawImage(img,0,0, canves.width, canves.height);
        img.style.display="none"
    }
}

// active filter for all 
let filters=document.querySelectorAll("ul li input");
filters.forEach(filter => {
    filter.addEventListener("input",() => {
        context.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px) 
        hue-rotate(${hueRotate.value}deg)
        `
        context.drawImage(img,0,0, canves.width, canves.height);
    })
});


// download 
download.onclick=() => { 
download.href=canves.toDataURL("image/jpeg")
 }

 // change mode
 const toggleMode=document.getElementById("toggleMode")
 const bgcolor=document.getElementById("bgcolor")
 const body =document.querySelector("body")
 

 toggleMode.addEventListener("click",() => {
    toggleMode.classList.toggle("bi-brightness-high-fill")
    if (toggleMode.classList.toggle("bi-moon-fill")) {

        toggleMode.style.color="white"
        bgcolor.style.background="#222"
        body.style.background="#111";
        bgcolor.style.transition=".5s"
        body.style.transition=".5s"
    }else {
       
        toggleMode.style.color="black"
        bgcolor.style.background="teal"
        body.style.background="white";
        bgcolor.style.transition=".5s"
        body.style.transition=".5s"
    }
  
 })