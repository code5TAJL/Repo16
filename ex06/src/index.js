firstName = (firstName) => {
    return firstName.toUpperCase();
}

const lastName = (lastName) => {
    return lastName.toLowerCase();
}

console.log(firstName("asmir"));
console.log(lastName("SULEJMANOVIC"));

exports.firstName = firstName;
exports.lastName = lastName;