const mongoose = require('mongoose')
const schema = mongoose.Schema;

const articleSchema = new schema({
  title: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
}, { timesstamps: true });

const Articles = mongoose.model('articles', articleSchema);

module.exports = Articles;