const { EntitySchema, OneToOne, JoinColumn, Generated, JoinTable } = require("typeorm")

module.exports = new EntitySchema({

name:"Sheets",
tableName:"SHEET",
relations : {
    USER_U: {
        type: "one-to-one",
        target: "Users",
        JoinColumn:{
            name : "IDUSER"
        },
        inverseSide:"SHEET"
    },

    INVENTORY: {
        type: "one-to-one",
        target: "Inventories",
        JoinColumn:{
            name: "IDINVENTORY"
        },
        inverseSide:"SHEET"
    },
    // SHEET_HAS_SPELL:{
    //     type:"many-to-many",
    //     JoinTable:{
    //         name:"SHEET_HAS_SPELL",
    //         JoinColumn:{
    //             name:"IDSHEET",
    //             referencedColumnName: "IDSHEET"
    //         },
    //         inverseJoinColumn:{
    //             name:"IDSPELL",
    //             referencedColumnName: "IDSPELL"
    //         }
    //     }

    // }
    
    SPELL:{
        type:"one-to-one",
        target:"Spells",
        JoinColumn:{
           name:"IDSPELL"
        },
        inverseSide:"SHEET"
        
    }
    
},

columns: {

    IDSHEET:{
        type:"int",
        generated: true,
        primary: true

    },
    CHARACTERNAME:{
        type:"varchar",

    },
    LEVEL_C:{
        type:"int"
    },
    EXP:{
        type:"int"
    },
    RACE:{
        type:"varchar"
    },
    CLASS:{
        type:"varchar"
    },
    ARMORCLASS:{
        type:"int"
    },
    MOVESPEED:{
        type:"int"
    },
    STR:{
        type:"int"
    },
    ENDU:{
        type:"int"
    },
    DEX:{
        type:"int"
    },
    WIS:{
        type:"int"
    },
    INTE:{
        type:"int"
    },
    CHA:{
        type:"int"
    }


}









})