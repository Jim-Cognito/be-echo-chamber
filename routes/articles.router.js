const { getArticleById, voteArticle, getAllArticles } = require("../controllers/articles.controllers")

const { getCommentByArticleId, postCommentByArticle } = require("../controllers/comments.controllers")

const articlesRouter = require("express").Router()

articlesRouter.route("/:article_id").get(getArticleById).patch(voteArticle)

articlesRouter.route("/").get(getAllArticles)

articlesRouter.route("/:article_id/comments").get(getCommentByArticleId).post(postCommentByArticle)

module.exports = articlesRouter