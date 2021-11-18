const profile = [];
const obj = {};
obj.name = "Ehesanali";
obj.desig = "developer";
obj.no = "45";
profile.push(obj);

const obj2 = {};
obj.otherDetails = obj2;

const obj3 = {};
obj3.to = "badarpur";
obj3.dist = "mehsana";
obj3.tal = "vadnagar";
obj.otherDetails.address = obj3;
obj2.phone = "0000000530";
obj2.Ehesanali = [1, 2, 3, 4, 5];

console.log(profile);
