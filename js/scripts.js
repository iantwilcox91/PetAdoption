



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
var practiceCat = new Pet("cat", "Calico", "Tootsie", 4, ["white","black", "brown"])

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
