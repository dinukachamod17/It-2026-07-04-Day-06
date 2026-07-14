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

let customer2 = {
    name: "chamod",
    age: 20,
    adress: "colombo",
    items: [
        {
            id: 1,
            name: "item1",
            price: 200
            variants: [
                {
                    id: 1,
                    name: "varints1",
                    price: 10
                },{
                    id: 2,
                    name: "varints2",
                    price: 20
                },{
                    id: 3,
                    name: "varints3",
                    price: 40
                }
            ],
        },{
            id: 2,
            name: "item2",
            price: 400
        },{
            id: 3,
            name: "item3",
            price: 600
        }
    ],
    father:{
        name:"doe",
        age: 55,
        address:"gampaha"
    }

}

//console.log(customer2.age);
//console.log(customer2.father);
//console.log(customer2.father.age);
//console.log(customer2.items[1].price);
console.log(customer2.items.variants.price);





