const { EntitySchema, OneToOne, JoinColumn, Generated } = require("typeorm");

module.exports = new EntitySchema({
  name: "Spells",
  tableName: "SPELL",

  relations: {
    SHEET: {
      type: "one-to-one",
      target: "Sheets",
      JoinColumn: {
        name: "IDSPELL",
      },
      inverseSide: "SPELL",
    },
  },

  columns: {
    IDSPELL: {
      type: "int",
      generated: true,
      primary: true,
    },

    SPELL: {
      type: "varchar",
    },
    SPELLDESCRIPTION: {
      type: "varchar",
    },
  },
});
