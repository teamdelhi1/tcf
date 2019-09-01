//WRITTEN BY celxkodez

//SCRIPTS HANDLES THE IMAGE DISPLAY ON THE VOLUNTEER PAGE


//please look through the logic so you understand what it does or contact celxkodez
//+2348104222808, decele2011@gmail.com.

let img = document.querySelector('#changeimg');

function setImageSource(){
    //please look through the img folder and ensure that the image names are numbered accordingly
    let numberOfImages = 0, random;
    //numberOfImages multiplied by the random value
    random = Math.floor(4 * Math.random());
    //add 1 to the number of images because random is now less than number of images
    numberOfImages = random + 1;
    img.setAttribute('src', `img/${numberOfImages}.jpg`)
}

setInterval(setImageSource, 10000);