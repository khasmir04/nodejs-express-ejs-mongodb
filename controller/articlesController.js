const Articles = require('../model/articles')

// Create Article
const article_add_form = (req, res) => {
  res.render("pages/add")
}

const article_add = (req, res) => {
  const body = req.body
  const modifiedBody = {
    ...body,
    completed: body.completed === 'on' ? true : false,
    imageSrc: "https://dummyimage.com/400x300/000/fff"
  }
  const article = new Articles(modifiedBody);
  article
    .save()
    .then(result => res.render("pages/new", { article: result }))
    .catch(err => console.log(err))
}

// Update Article
const article_update_form = (req, res) => {
  Articles.findById(req.params.id)
    .then(result =>
      res.render("pages/update", { article: result })
    )
    .catch(err => console.log(err))
}

const article_update = async (req, res) => {
  let updatedArticle = await Articles.findByIdAndUpdate(req.params.id, {
    ...req.body,
    completed: req.body.completed === "on" ? true : false,
  })
  if (!updatedArticle) return res.status(404).render('pages/error')
  // TODO: Add preview page after editing
  // res.render("pages/view", { article: updatedArticle })
  res.redirect("/gallery")
}

// Delete Article
const article_delete = async (req, res) => {
  const deletedArticle = await Articles.findByIdAndDelete(req.params.id)
  if (!deletedArticle) {
    return res.status(404).render('pages/error')
  }
  res.redirect('/gallery')
}

// Read Single Article
const article_view_one = (req, res) => {
  Articles.findById(req.params.id)
    .then(result => res.render("pages/view", { article: result })
    )
    .catch(err => console.log(err))
}

// Read all articles
const article_view_all = (req, res) => {
  Articles.find().sort({ createdAt: -1 })
    .then(result => res.render("pages/gallery", { articles: result }))
    .catch(err => console.log(err))
}

module.exports = {
  article_add_form,
  article_add,
  article_update_form,
  article_update,
  article_delete,
  article_view_one,
  article_view_all
}
