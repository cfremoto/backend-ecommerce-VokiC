const {connect} = require('mongoose');

const dbConnect = async () => {
  await connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  console.log('Conect on DB is ready 🤟')
}

module.exports = dbConnect
