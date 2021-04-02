let person = {
    fullname: 'John Doe',
    getFullName: function() {
        console.log("My name is "+this.fullname);
    }
};
person.getFullName()
//setTimeout(person.getFullName, 1000);