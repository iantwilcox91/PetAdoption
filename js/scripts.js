//Pet object
function Pet (type, breed, name, age, color) {
  this.typeOf = type;
  this.breed = breed;
  this.nameOf = name;
  this.ageOf = age;
  this.colorOf = color;
  this.adopted = false;
}





























$(function(){




  $("#theDonateButton").click(function() {
    var type = $('input[name=type]:checked', '.typeOfAnimal').val();
    var breed = $("input#breedOfAnimal").val();
    var name = $("input#nameOfAnimal").val();
    var age = $("input#ageOfAnimal").val();
    var color = $(":checkbox:checked").map(function() { return this.value; }).get().join().split(",");
    var newPet = new Pet(type, breed, name, age, color);
    console.log(newPet)
  });




});
