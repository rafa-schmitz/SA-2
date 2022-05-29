const { EntitySchema, OneToOne, JoinColumn, Generated } = require("typeorm");

module.exports = new EntitySchema({
  name: "Users",
  tableName: "USER_U",
  relations: {
    SHEET: {
      type: "one-to-one",
      target: "Sheets",
      JoinColumn: {
        name: "IDUSER",
      },
      inverseSide: "USER_U",
    },
  },

  columns: {
    IDUSER: {
      type: "int",
      generated: true,
      primary: true
    },
    USERNAME: {
      type: "varchar",
      nullable: false
    },
    EMAIL: {
        type: "varchar",
        nullable: false
    },
    PASSWORD_U: {
      type: "varchar",
      nullable: false
    },
    TYPE_U: {
      type: "boolean",
      nullable: true
    },
  },
});
