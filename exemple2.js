let person1 = {
    fullname: 'John Doe',
    say: function(str) {
        console.log(this.fullname + " says: " +  str);
    }
};
person1.say("hello")
var person2 = {
    fullname: 'Allani Ahmed'
}
