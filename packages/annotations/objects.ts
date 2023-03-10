const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  // adding a method
  setAge(age: number): void {
    this.age = age;
  },
};

// desctructuring with annotations
// the variable age gets assigned the value of the key "age" from
// the profile variable
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

console.log("age: ", age);
console.log("lng: ", lng);

console.log("profile.coords.lng: ", profile.coords.lng);
