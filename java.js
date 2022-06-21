const getBar= document.getElementsByClassName('bar')[0];
const getNavbar= document.getElementsByClassName('top-nav')[0];
const homeImage= document.getElementById("HomeMainPic");

// homepage hero picture change image

let i = 0; 			
let Homeimages = [];	
let time = 4000;
	 
//images list
Homeimages[0] = "img/background-home-big.jpg";
Homeimages[1] = "img/home1.jpg";
Homeimages[2] = "img/home3.jpg"


//Change Image Home
function changeHomeImg(){
	homeImage.src = Homeimages[i];


	if(i < Homeimages.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout("changeHomeImg()", time);
}
changeHomeImg();
getBar.addEventListener('click', () =>{
    getNavbar.classList.toggle("active");

})