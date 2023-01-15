// object : Hash Table

const table = {};

table["key"] = 100;
table["key2"] = "Hello";
console.log(table["key"]);

table["key"] = 349;
console.log(table["key"]);

delete table["key"];
console.log(table["key"]);

// Map : Hash Table

const table2 = new Map();

table2.set("key", 100);
table2.set("key2", "Hello");
console.log(table2["key"]);
console.log(table2.get("key"));

const object = { a: 1 }; // Map은 Object로도 Key로 쓸 수 있다

table2.set(object, "A1");
console.log(table2.get(object));

table2.delete(object);
console.log(table2.get(object));
console.log(table2.entries());
console.log(table2.keys());
console.log(table2.values());

table2.clear();
console.log(table2.values());

// Set : Hash Table

const table3 = new Set();

table3.add("key");
table3.add("key2");
console.log(table3.has("key"));
console.log(table3.has("key3"));

table3.delete("key2");
console.log(table3.has("key2"));

table3.add("key3");
console.log(table3.size);

table3.clear();
console.log(table3.size)
