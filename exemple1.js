let person = {
    name: 'John Doe',
    getName: function() {
        console.log("My name is "+this.name);
    }
};

setTimeout(person.getName, 1000);