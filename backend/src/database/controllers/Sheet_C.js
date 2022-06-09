const Sheet = require("../../entities/Sheet");
const User = require("../../entities/User");
const Spell = require("../../entities/Spells");
const Inventory = require("../../entities/Inventory");
const { getRepository } = require("typeorm");

module.exports = {
  async postSheet(req, res) {
    const {} = req.body;
    let sheet = getRepository(Sheet);

    const response = await sheet.save(req.body);

    try {
      return res.status(200).json({
        dados: response,
      });
    } catch (err) {
      return res.status(400).json({
        erro: "deu ruim pai",
      });
    }
  },
  //////////////////////////////////////
  async getSheet(req, res) {
    let sheet = getRepository(Sheet);
    let inventory = getRepository(Inventory);
    let spell = getRepository(Spell);
    let user = getRepository(User);

    const { IDUSER } = req.params;

    const userB = await user.findOneById(IDUSER);

    const sheetB = await sheet.find({
      where: {
        IDSHEET: IDUSER,
      },
    });

    const inv = await inventory.find({
      where: {
        IDINVENTORY: IDUSER,
      },
    });
    const spellC = await spell.find({
      where: {
        IDSPELL: IDUSER,
      },
    });

    return res.status(200).json({ sheetB, inv, spellC });
  },

  ///////////////////////////////////
  async postInv(req, res) {
    let inventory = getRepository(Inventory);
    const { ITEM, ITEMDESCRIPTION } = req.body;

    const response = await inventory.save(req.body);

    try {
      return res.status(200).json({
        dados: response,
      });
    } catch (err) {
      return res.status(400).json({
        erro: "deu ruim pai",
      });
    }
  },
  //////////////////////////
  async postSpell(req, res) {
    let spell = getRepository(Spell);

    const {} = req.body;

    const response = await spell.save(req.body);

    try {
      return res.status(200).json({
        dados: response,
      });
    } catch (err) {
      return res.status(400).json({
        erro: "deu ruim pai",
      });
    }
  },
  ///////////////////////////////////
  async putSheet(req, res) {
    let sheet = getRepository(Sheet);
    let user = getRepository(User);

    const {} = req.body;
    const { IDUSER } = req.params;

    const handleReq = await sheet.findOne({
      where: {
        IDSHEET: IDUSER,
      },
    });

    const response = await sheet.update(handleReq, req.body);
    if (handleReq) {
      try {
        return res.status(200).json({
          dados: handleReq,
        });
      } catch ({ ...err }) {
        return res.status(400).json(console.log({ err }));
      }
    }
  },
  /////////////////////////////////////////////
  async putInv(req, res) {
    let inventory = getRepository(Inventory);
    let user = getRepository(User);

    const { ITEM, ITEMDESCRIPTION } = req.body;
    const { IDUSER } = req.params;

    const handleReq = await inventory.findOne({
      where: {
        IDINVENTORY: IDUSER,
      },
    });

    const response = await inventory.update(handleReq, req.body);
    if (handleReq) {
      try {
        return res.status(200).json({
          dados: handleReq,
        });
      } catch ({ ...err }) {
        return res.status(400).json(console.log({ err }));
      }
    }
  },
  ///////////////////////////////////////////
  async putSpell(req, res) {
    let spell = getRepository(Spell);
    let user = getRepository(User);

    const {} = req.body;
    const { IDUSER } = req.params;

    const handleReq = await spell.findOne({
      where: {
        IDSPELL: IDUSER,
      },
    });

    const response = await spell.update(handleReq, req.body);
    if (handleReq) {
      try {
        return res.status(200).json({
          dados: handleReq,
        });
      } catch ({ ...err }) {
        return res.status(400).json(console.log({ err }));
      }
    }
  },

  async deleteSheet(req, res) {
    let sheet = getRepository(Sheet);
    let user = getRepository(User);
    let inventory = getRepository(Inventory);
    let spell = getRepository(Spell);

    const { IDUSER } = req.params;

    const handleSheet = await sheet.findOne({
      where: {
        IDSHEET: IDUSER,
      },
    });

    const handleInv = await inventory.findOne({
      where: {
        IDINVENTORY: IDUSER,
      },
    });

    const handleSpell = await spell.findOne({
      where: {
        IDSPELL: IDUSER,
      },
    });

    const delSheet = await sheet.delete(handleSheet);

    const delSpell = await spell.delete(handleSpell);

    const delInv = await inventory.delete(handleInv);

    try {
      return res.status(200).json({
        msg: "deletado com sucesso",
      });
    } catch ({ ...err }) {
      return res.status(400).json(console.log({ err }));
    }
  },
};
