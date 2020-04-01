var slideshow = {
photoList:["photo1","photo2","photo3"],
currentPhotoIndex:0,
nextPhoto:function (){

    if (this.currentPhotoIndex <this.photoList.length){
        this.currentPhotoIndex++;
        console.log(this.photoList[this.currentPhotoIndex])
    }
    else{
        console.log("End of slideshow");
        this.pause();
        }
    }  , 
prevPhoto:function(){
    if(this.currentPhotoIndex > 0){
        this.currentPhotoIndex-- ;
        console.log(this.photoList[this.currentPhotoIndex])
        }
    else{
        console.log("End of slideshow");
          this.pause();
        }
     },
getCurrentPhoto:function(){
    console.log(this.photoList[this.currentPhotoIndex])
   },

playInterval:null,

play:function(){
    var self = this;
    this.playInterval = setInterval(function(){self.nextPhoto()}, 2000)
},
pause: function() {
    clearInterval(this.playInterval);
}

}
//slideshow.play()
/* slideshow.play(); */
/* slideshow.getCurrentPhoto();
slideshow.nextPhoto();
//slideshow.nextPhoto();
slideshow.prevPhoto(); */

/* play: function(){ 
    //  	clearInterval(); 
            setInterval(play, 2000);
            if (this.currentPhotoIndex < this.photoList.length) {
                 return this.currentPhotoIndex[this.currentPhotoIndex]
                 this.currentPhotoIndex++;
             } else {				//after last index, paused slideshow
                 clearInterval(currentPhotoIndex);
                 console.log('paused');
             }
   }
   } */