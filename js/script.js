// Complete Day 1 goals here
let songs=[{track:"Blinding lights"}, 
          {track:"Take on me"}, 
           {track:"Smooth criminal"}, 
           {track:"Industry baby"}];
let aritst=[{singer:"The Weekend"}, 
            {singer:"Ah-a"}, 
            {singer:"Michael Jackson"}, 
            {singer:"Lil nas X"}];
/*let image=[<img src="https://storage.briwebapp.net/2020/06/7b93b245-wd.jpg"/>, 
        <img src="https://cdns-images.dzcdn.net/images/cover/e0ce8977ab98d73bcea00fc838ece034/500x500.jpg"/>, 
          <img src="https://www.lololyrics.com/img/cover/free/18383.jpeg"/>, 
          <img src="https://i1.sndcdn.com/artworks-j1zGqEwf1STpMyZK-PRpXPg-t500x500.jpg"/>]*/
let link=[{address:"https://www.youtube.com/watch?v=fHI8X4OXluQ"}, 
          {address:"https://www.youtube.com/watch?v=djV11Xbc914"}, 
          {address:"https://www.youtube.com/watch?v=h_D3VFfhvs4"}, 
           {adrees:"https://www.youtube.com/watch?v=HCq1OcAEAm0"}];
let name=[".title",".artist", ".image",".link"];
let put=[".songs", ".artists", ".images", ".links"];
$(".add").click(function(){
  let music=$(name[0]).val();
  $(put[0]).append(music);
  
 let music2=$(name[1]).val();
  $(put[1]).append(music2);
  
  let music3=$(name[2]).val();
  $(put[2]).append(music3);
  
 let music4=$(name[3]).val();
  $(put[3]).append(music4);
});
function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  songs.forEach(function(song){
    $(".songs").append(`<li>${song.track}</li>`);
});
    aritst.forEach(function(sing){
    $(".artists").append(`<li>${sing.singer}</li>`); 
});

  link.forEach(function(ip){
    $(".links").append(`<li>${ip.address}</li>`); 
});
}
  

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
