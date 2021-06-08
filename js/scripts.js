// $(document).ready(function() {
//   const deck = [];
//   const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
//   const ranks = ["Ace", "1","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
//   deck.forEach(function(suits,ranks) {
//     deck.push(ranks + 'of'+ suits);
//   });
//   deck;
// });

//  Your card is the ranks + "of" + suits 
//Math.random(52)+1
//deck[randomnumber]

// $(document).ready(function() {
//   const value = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
//   let card = [];
//   value.forEach(function(element){
//     card.push(element+' of Spades');
//     card.push(element+' of Hearts');
//     card.push(element+' of Diamonds');
//     card.push(element+' of Clubs');
//   });
//   card.forEach(function(element) {
//     $("#cards").append("<li id=\"card\">"+element+"</li>");
//   });
// });


$(document).ready(function() {
  const values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
  const suits = [" Spades", " Hearts", " Diamands", " Clubs"];
  let card = [];
  values.forEach(function(value){
    suits.forEach(function(suit){
      card.push(value+' of '+suit);
  });
});
  card.forEach(function(element) {
    $("#cards").append("<li id=\"card\">"+element+"</li>");
  });
});

// $(document).ready(function() {
//   const values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
//   const suits = [" of Spades", " of Hearts", " of Diamands", " of Clubs"];
//   let card = [];
//   values.forEach(function(value){
//     suits.forEach(function(suit){
//       card.push(value+' of '+suit);
//   });
// 	});
//   card.forEach(function(element) {
//     $("#cards").append("<li id=\"card\">"+element+"</li>");
//   });
// })

// $(document).ready(function() {
//   const value = ["Ace", "1","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
//   const suit = ["Spades", "Hearts", "Diamands", "Clubs"];
//   let card = [];
//   value.forEach(function(element){

    
//   });
//   card.forEach(function(element) {
//     $("#cards").append("<li id=\"card\">"+element+"</li>");
//   });
// });