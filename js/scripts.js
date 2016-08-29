//Pet object
function Pet (type, breed, name, age, color) {
  this.typeOf = type;
  this.breed = breed;
  this.nameOf = name;
  this.ageOf = age;
  this.colorOf = color;
  this.adopted = false;
}

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
});
