const mongoose = require('mongoose');
const beautifyUnique =require('mongoose-beautiful-unique-validation');

const CompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    unique:true
  },
  totalSteps: {
    type: String,
    required: true,
  }
});

CompanySchema.plugin(beautifyUnique)
module.export= mongoose.model('Company', CompanySchema)