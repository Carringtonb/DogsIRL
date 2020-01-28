'use strict'

var petCardForm = document.getElementById('petCardForm');
petCardForm.addEventListener('submit', handlePetCardFormSubmit);

//TODO: Change to global profile, instead of profile defined here
myProfile = 

var PetCard = function (name, image, sex, age, birthday, owner, dateCollected, dateCreated, 
    goodDog, floofiness, energy, snuggles, appetite, bravery){
        this.name = name;
        this.image = image;
        this.sex = sex;
        this.age = age;
        this.birthday = birthday;
        this.owner = owner;
        this.dateCollected = dateCollected;
        this.dateCreated = dateCreated;
        this.goodDog = goodDog;
        this.floofiness = floofiness;
        this.energy = energy;
        this.snuggles = snuggles;
        this.appetite = appetite;
        this.bravery = bravery;
}

function handlePetCardFormSubmit(event){
    event.preventDefault();
    // var inputs = event.target.getElementsByTagName('input');
    // var name = inputs[0].value;
    var name = event.target.petName.value;
    var image = event.target.image.value;
    var sex = event.target.sex.value;
    var age = event.target.age.value;
    var birthday = '';
    var goodDog = event.target.goodDog.value;
    var floofiness = event.target.floofiness.value;
    var energy = event.target.energy.value;
    var snuggles = event.target.snuggles.value;
    var appetite = event.target.appetite.value;
    var bravery = event.target.bravery.value;
    
    // Check if the inputted name already exists on a petCard on this profile 
    var nameMatch = false;
    console.log(myProfile.petCards.length);
    for(var i=0; i< myProfile.petCards.length; i++){
        var newName = name.toLowerCase();
        var storedName = myProfile.petCards[i].name.toLowerCase();
        console.log(newName);
        console.log(storedName);
        if(newName===storedName) {
            nameMatch = true;
            break;
        }
    }

    // If a name match is not found, ok to create a new petCard
    if (nameMatch) {
        alert('Oh no! Your profile already includes a pet with that name. You can edit the existing pet or delete it and make a new one. Or, you could make a new version of your pet with a different name. Either way is fine :)');
    } else {
        var currentDate = new Date();
        var myPetCard = new PetCard(name,image, sex, age, birthday, myProfile.username, currentDate, currentDate, 
            goodDog,floofiness,energy,snuggles,appetite,bravery);
        myProfile.petCards.push(myPetCard);
        updateProfileDataInStorage();
    }
    

}
