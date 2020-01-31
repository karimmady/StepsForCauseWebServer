const mongoose = require('mongoose')
require('./models/Company')
const Company = mongoose.model('Company')

module.exports = {

    setCompanySteps: async(req, res) => {
        console.log("innnn")
        const company = new Company(req.body)
        await company.save(function(err) {
            if (err) {
                console.log(`Error occured when adding organization: ${err}`)
                res.status(500).send({'ERROR': err})
                return
            }
        })
        res.status(200).send({'data': company})
        return
    }
}