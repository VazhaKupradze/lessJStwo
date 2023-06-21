// -1

for (let i = 5; i <= 100; i++) {
    console.log(i);
}

// -2

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let aOne = 0; aOne < array1.length; aOne++) {
    if (array1[aOne] > 0 && array1[aOne] < 10) {
        console.log(array1[aOne]);
    }
}

// -3 

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let aTwo = 0; aTwo < array2.length; aTwo++) {
    if (array2[aTwo] == 5) {
        console.log("არის!");
        break;
    }
}

// -4 

let array3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let aThree = 0; aThree < array3.length; aThree++) {
    sum += array3[aThree];
}
console.log(sum);

//5

let array4 = [1, 2, 3, 7, 6, 9];
let sumOne = 0;
for (let aFour = 0; aFour < array4.length; aFour++) {
    sumOne += array4[aFour];
}
let avarage = sumOne / array4.length;
console.log(avarage);

// -6 

let array5 = [1, 2, 3, 7, 6, 9];
for (aFive = 0; aFive < array5.length; aFive++) {
    if (array5[aFive] !== 7)
        console.log(array5[aFive]);
}

// -7 

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
}
console.log(user.studentstatus);


// -8 

let userTwo = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}

if (userTwo.age < 18 && user.studentstatus == 'active') {
    console.log(hello);
}
else if (userTwo.name == 'levan') {
    console.log('Hello Levani');
}
else if (userTwo.studentstatus == 'active' || userTwo.age < 25) {
    console.log('hello world');
}
else {
    console.log('error');
}

// -9 

let array6 = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
];

for (let k of array6) {
    for (let j of k) {
        if (j > 0)
            console.log(j);
    }
}

// -10 -1


let array7 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]
for (let aSeven = 0; aSeven < array7.length; aSeven++) {
    if (array7[aSeven] % 2 == 0) {
        console.log(array7[aSeven]);
    }
}

// -10 -2

let array8 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]
for (let aEight = 0; aEight < array8.length; aEight++) {
    if (array8[aEight] % 2 == 1) {
        console.log(array8[aEight]);
    }
}

// -11 

let users = [
    { username: 'giorgi', status: false },
    { username: 'levani', status: false },
    { username: 'anna', status: true }
]

for (let p = 0; p < users.length; p++) {
    if (users[p].status == true) {
        console.log(users[p]);
    }
}