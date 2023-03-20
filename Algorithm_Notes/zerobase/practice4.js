let user = { name: "john" };
let admin = { name: "admin" };

function hello() {
    console.log(this.name + "안녕하세요");
}

user.func = hello;
admin.func = hello;

user.func()
admin.func()