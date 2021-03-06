//Pet object
function Pet (type, breed, name, age, color) {
  this.typeOf = type;
  this.breed = breed;
  this.nameOf = name;
  this.ageOf = age;
  this.colorOf = color;
  this.adopted = false;
  this.id = pets.length + 1;
  pets.push(this);
}
var pets = [];

//Starting list of pets.
var pets1 = new Pet("cat", "Seimese", "Meow", 11, ["White"]);
var pets2 = new Pet("cat", "Calico", "Frodo", 12, ["Yellow","black", "brown"]);
var pets3 = new Pet("cat", "Tabby", "Catsey", 9, ["Orange","black", "brown"]);
var pets4 = new Pet("dog", "German Sheapard", "Woofie", 1, ["Black"]);
var pets5 = new Pet("dog", "Weiner Dog", "Fido", 3, ["Brown"]);
var pets6 = new Pet("dog", "Husky", "Wolf", 10, ["White","black", "grey"]);
var pets7 = new Pet("Lizard", "Iguana", "Where is it", 120, ["Green"]);
var pets8 = new Pet("Bird", "Perigrin Falcon", "Chirp", 15, ["white","black"]);


function findPet(id) {
  for (var i = 1; i < pets.length; i++) {
    if (pets[i-1].id === id) {
      return pets[i-1];
    }
  }
}

// This is an object to push pets too

//This will display pet information
Pet.prototype.show = function () {
  $(".newPet").append(""+
  '<div class="aNewPet">'+
  '<h3>'+this.nameOf+'<small> ('+this.typeOf+')</small></h3>' +
  '<div class="showMorePet">' +
  '<ul>' +
  '<li>'+this.breed+'</li>' +
  '<li>'+this.ageOf+'</li>' +
  '<li>'+this.colorOf+'</li>' +
  '</ul>' +
  '</div> ' +
  '<button type="button" class="btn btn-primary">Adopt Toggle</button>' +
  '</div>' +
  '');}

//This will write the series of pets





$(function(){
  $("#theDonateButton").click(function() {
    var type = $('input[name=type]:checked', '.typeOfAnimal').val();
    var breed = $("input#breedOfAnimal").val();
    var name = $("input#nameOfAnimal").val();
    var age = $("input#ageOfAnimal").val();
    var color = $(":checkbox:checked").map(function() { return this.value; }).get().join().split(",");
    var newPet = new Pet(type, breed, name, age, color);

    console.log(newPet)
    newPet.show();
  });

//This will hide pets information
  $('body').on('click','.aNewPet', function() {
    $(this).children('.showMorePet').toggle();
  });
});
