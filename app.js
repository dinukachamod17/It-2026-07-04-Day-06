// class Customer{
//     name;
//     age;
//     address;


//     constructor(name,age,address){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//     }

// }

// let customer1 = new Customer("dinuka",20,"gampaha");
// console.log(customer1);

//--------------------------------------------------------------------------

// let customer2 = {
//     name: "chamod",
//     age: 20,
//     adress: "colombo",
//     items: [
//         {
//             id: 1,
//             name: "item1",
//             price: 200,
//             variants: [
//                 {
//                     id: 1,
//                     name: "variants1",
//                     price: 10
//                 }, {
//                     id: 2,
//                     name: "variants2",
//                     price: 20
//                 }, {
//                     id: 3,
//                     name: "variants3",
//                     price: 40
//                 }
//             ]
//         }, {
//             id: 2,
//             name: "item2",
//             price: 400
//         }, {
//             id: 3,
//             name: "item3",
//             price: 600
//         }
//     ],
//     father: {
//         name: "doe",
//         age: 55,
//         address: "gampaha"
//     }

// }

// //console.log(customer2.age);
// //console.log(customer2.father);
// //console.log(customer2.father.age);
// //console.log(customer2.items[1].price);
// //console.log(customer2.item1.variants1.price);
// console.log(customer2.items[0].variants[1].price);
// console.log(customer2.items[0].variants[2].name);
// console.log(customer2.items[0].variants[2].id);



//------------------------------------------------------------
//DOM.  Document object model 

// document.write("<h2>dinuka</h2>")

console.log(document.title);

let heading = document.getElementById("heading")

//console.log(heading);

//heading.innerText = "dinuka"


// let number = 0
// function increaseValue() {
//     heading.innerText = "dinuka"+(++number)

//     console.log("clicked");
    
// }

// function decreaseValue() {
//     heading.innerText = "dinuka"+(--number)

    
// }

// function changeNumber(){
//     heading.innerText = "dinuka"+(number+5)
// }

// function changeHeading(){
//    let txtInput = document.getElementById("inputText")
//    heading.innerText = (txtInput.value)
//     console.log(txtInput.value);
    
// }

// function changeHheading(){
//     document.getElementById()
//     myHeading.innerText = ("lakshan")
//     console.log("clicked");
    
// }


function sum(){
   let val1= document.getElementById("inputText01").value
   let val2= document.getElementById("inputText02").value

   let sum = Number(val1) + Number(val2)
   heading.innerText = (sum)

    console.log(sum);
    
}

function subtraction(){
    let val1 = document.getElementById("inputText01").value
    let val2 = document.getElementById("inputText02").value

    let Difference = Number(val1) - Number(val2)
    heading.innerText = (Difference)

    console.log(Difference);
    
}

//===================================================================


function multiplication(){
    let value03 = document.getElementById("inputText03").value
    let value04 = document.getElementById("inputText04").value

    let multiplication =Number(value03) * Number(value04)
    myHeading.innerText = (multiplication)

    console.log(multiplication);
    
}

function division(){
    let value03 = document.getElementById("inputText03").value
    let value04 = document.getElementById("inputText04").value

    let division =Number(value03) / Number(value04)
    myHeading.innerText = (division)

    console.log(division);
    
}