$( document ).ready(onReady);

function onReady() {
    $('#headline').append('Hello World')
    $('#addGroupMemberButton').on('click', addGroupMember)
    $('#search').on('click', firstNameSearch)
}

let groupMembers = []

function addGroupMember() {
    $('#groupOut').empty();
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    // groupMembers.push(`${firstName} ${lastName}`);
    let person = {}
    person.firstName = firstName
    person.lastName = lastName
    groupMembers.push(person)
    console.log(groupMembers)
    for (i = 0; i < groupMembers.length; i++) {
        $('#groupOut').append(`<li>${groupMembers[i].firstName} ${groupMembers[i].lastName}</li>`);
    }
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
}

function firstNameSearch() {
    for (i = 0; i < groupMembers.length; i++) {
        let searchName = $('#firstNameSearchIn').val();
        if (groupMembers.firstName[i] === searchName) {
            alert('Someone has this first name!');
        } else {
            alert('No one has this first name! Try again.');
        }
    }
}