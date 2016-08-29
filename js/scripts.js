



//Pet object
function Pet (type, breed, name, age, color) {
  this.typeOf = type;
  this.breed = breed;
  this.nameOf = name;
  this.ageOf = age;
  this.colorOf = color;
  this.adopted = false;
}

//Short Term Pet --- DELETE ME!
var practiceCat = new Pet("cat", "Calico", "Tootsie", 4, ["white","black", "brown"]);

//This will display pet information
Pet.prototype.show = function () {
    $(".newPet").append(""+
    '<h3>'+this.nameOf+'<small> ('+this.typeOf+')</small></h3>' +
    '<div class="showMorePet">' +
      '<ul>' +
        '<li>'+this.breed+'</li>' +
        '<li>'+this.ageOf+'</li>' +
        '<li>'+this.colorOf+'</li>' +
      '</ul>' +
    '</div> ' +
'');}

$(function(){
practiceCat.show();
});




var pets1 = new Pet("cat", "Seimese", "Meow", 11, ["White"]);
var pets2 = new Pet("cat", "Calico", "Frodo", 12, ["Yellow","black", "brown"]);
var pets3 = new Pet("cat", "Tabby", "Catsey", 9, ["Orange","black", "brown"]);
var pets4 = new Pet("dog", "German Sheapard", "Woofie", 1, ["Black"]);
var pets5 = new Pet("dog", "Weiner Dog", "Fido", 3, ["Brown"]);
var pets6 = new Pet("dog", "Husky", "Wolf", 10, ["White","black", "grey"]);
var pets7 = new Pet("Lizard", "Iguana", "Where is it", 120, ["Green"]);
var pets8 = new Pet("Bird", "Perigrin Falcon", "Chirp", 15, ["white","black"]);
