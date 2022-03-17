const {Schema} = require ('mongoose')

const optionsSchema = new Schema({
    options:[{
        type: String
    }]
})


module.exports = optionsSchema