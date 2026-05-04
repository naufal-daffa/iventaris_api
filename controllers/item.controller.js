const Validator = require("fastest-validator");
const v = new Validator();
const { Item } = require("../models")
const { response } = require("../helpers")

module.exports = {
    createItem: async (req, res) => {
        try {
            const { name, stock } = req.body

            const schema = {
                name: { type: "string", min: 3 },
                stock: { type: "number", positive: true, integer: true}
            };

            const data = {
                name: name,
                stock: Number(stock)
            }

            const validate = v.validate(data, schema)

            if(validate.length > 0 ){
                return 
            }
            
        } catch (error) {
            return res.status(500).json(response(500, "server error", error.message))
        }
    }
}