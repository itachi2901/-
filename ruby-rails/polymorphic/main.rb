event = Event.create name: "Event1"
event_comment = event.comments.create content: "This event is awesome!"
event_comment
# => <Comment id: 1, content: "This event is awesome!", commentable_id: 1, commentable_type: "Event", created_at: ...>

article = Article.create title: "article1"
article_comment = article.comments.create content: "This article is great!"
article_comment
# => <Comment id: 2, content: "This article is great!", commentable_id: 1, commentable_type: "Article", created_at: ...>