//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var array = [];
    for (var key in object){
        array.push(object[key]);
    }
    return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var stringArr = [];
    for (var key in object){
        stringArr.push(key);
    }
    return stringArr.join(" ");
}   

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var array = [];
    for (var key in object){
        if (typeof object[key] === "string"){
            array.push(object[key]);
        }
    } return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return "array";
    } else if (typeof collection === "object"){
        return "object";
    }
} 

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var letter = string.charAt(0);
    var letter2 = letter.toUpperCase();
    var part = string.slice(1, string.length);
    var string2 = letter2 + part;
    return string2;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var array = string.split(" ");
    for (let i = 0; i < array.length; i++){
        array[i] = capitalizeWord(array[i]);
    } return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    object.name = capitalizeWord(object.name);
    return "Welcome " + object.name + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    object.name = capitalizeWord(object.name);
    object.species = capitalizeWord(object.species);
    return "" + object.name + " is a " + object.species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (!Array.isArray(object.noises)){
        return "there are no noises";
    }else if (object.noises.length === 0) {
        return "there are no noises";
    }else if (Array.isArray(object.noises)) {
        return object.noises.join(" ");
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.search(word) >= 0){
        return true;
    } else if (string.search(word) === -1){
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (!object.friends){
        return false;
    } else if (object.friends.length > 0){
        for (let i = 0; i < object.friends.length; i++){
            if (object.friends[i] === name){
                return true;
            }else if (object.friends[i] !== name){
                
            }
        } 
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //input name, arrray
    //output array
    
    let nonFriendsNameArr = [];
    //loop over the array
    for (i = 0; i < array.length; i++) {
    
      // check if the name exists in the friends array if it does then the indexof(name) === 0; if it does not the indexof(name) === -1
  
      if(array[i].friends.indexOf(name) === -1){
  
        //check if the name is !== array[i].name; and then push it to the empty array
  
        if(name !== array[i].name) {
          nonFriendsNameArr.push(array[i].name);
        }
      }
    }
     return (nonFriendsNameArr);
  }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //for (var key in object) {
        if (object.hasOwnProperty(key)) {
            object[key] = value;
            return object;
        } else {
            object[key] = value;
            return object;
        }
    //}



}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var key in object){
        //console.log(object);
        for (let i = 0; i < array.length; i++){
            if (key === array[i]){
                delete object[key];
                console.log(object);
            } else{
                console.log(object);
            }
        } 
    } return object[key];
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return uniqueArray = Array.from(new Set(array));
    // first return line will initialize new variable uniqueArray
    // new Set(array) will take our passed in argument and create an array-like
    // object with only unique elements
    // last our Array.from will convert our array-like object to an exact array
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}