function greeter(person: string) {
	person=person+1;
    return "Hello, " + person;
}

//var user = "Jane User";

var user = [12,12,44];

document.body.innerHTML = greeter(user);
