// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */
/*
I: function makeContact(id, nameFirst, nameLast). function makeContactList
O: returns contact object. returns object that manages contacts
C:
E:
*/

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var contact = {};
    contact.id = id;
    contact.nameFirst = nameFirst;
    contact.nameLast = nameLast;

    /*
    var setFullName = function(contact) {
        var fullName = contact.nameFirst + " " + contact.nameLast;
        return fullName;
    }
    contact.fullName;
    */

    return contact;

} 



function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
// how to populate this array with contact(s)?


    return { // returning an object
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){ // {id: 2, nameFirst: "Alex", nameLast: "Aaron"}
            contacts.push(contact);
        },
        findContact: function(fullName){ // "Max Gaudin"

            // iterate through array using for loop
            for (var i = 0; i < contacts.length; i++) {
                
                // determine if the current object relates to fullName
                if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast) {
                    return contacts[i];
                } 
            }
            return undefined;
        },
        removeContact: function(contact) {
            for (var i = 0; i < contacts.length; i++){
                if (contacts[i] === contact){
                    return contacts.splice(i, 1);
                }
            }
        },
        printAllContactNames: function(){
            var string = "";
            var allNames = "";
            for (var i = 0; i < contacts.length; i++){
                string += "." + contacts[i].nameFirst + " " + contacts[i].nameLast;
            }
            allNames = string.split(".").join("\n");
            // the above line will split each contact at its preceding "."
            // and assign each string to an index in an array
            // then it will join each index with a line break back into a string
            return allNames.slice(1);
            // the above line will take everything after index 1 in our new string
            // which will be \n -> because the prompt asks to start at a contact name
            
        }
    }
    
    return contacts;
}

//makeContact("1", "Max", "Gaudin");
makeContactList();
console.log(contacts);



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
