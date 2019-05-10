// "use strict";
// this.name = 'Hello';
// let event = {
//     name: 'Birthday Party',
//     // printGuestList() {
//     //     console.log(`Displaying Guest List for ${this.name}`);
//     // }
//     printGuestList: () => {
//         console.log(`Displaying Guest List for ${this.name}`);
//     }
// }

// console.log(this);
// event.printGuestList();

this.table = 'House Table';

this.garage = {
    table: 'Garage Table'
}

let childRoom = {
    table: "Child's table"
}

let cleanTable = function(soap) {
    this.table = "function's table";
    this.obj = {
        table: "obj's table",
        innerFunc: (soapName) => {
            console.log(`Cleaning ${this.table} with ${soapName} Soap`);
        }
    };
    // this.obj = 'Hello';
    // var innerFunc = function (soapName) {
    //     console.log(`Cleaning ${this.table} with ${soapName} Soap`);
    // }
    this.obj.innerFunc(soap);
    // console.log(this.obj);
}

cleanTable('Yolo')
cleanTable.call(this, 'Dawn');
cleanTable.call(this.garage, 'Dettol');
cleanTable.call(childRoom, 'Dial');