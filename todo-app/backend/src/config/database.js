const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb+srv://ztiago3:ZSdU0gniUtruh1eT@ztiago3-2eypg.mongodb.net/test?retryWrites=true&w=majority')