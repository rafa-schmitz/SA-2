const { EntitySchema, OneToOne, JoinColumn, Generated } = require("typeorm")

module.exports = new EntitySchema({

name:"Inventories",
tableName:"INVENTORY",
relations : {
    
    INVENTORY: {
    type: "one-to-one",
    target: "Sheets",
    JoinColumn:{
        name: "IDINVENTORY"
    },
    inverseSide:"INVENTORY"
}
},

columns:{

    IDINVENTORY:{
        type:"int",
        generated: true,
        primary: true

    },

    ITEM:{
        type:"varchar"

    },
    ITEMDESCRIPTION:{
        type:"varchar"

    }


}




})