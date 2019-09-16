class CommentController < ApplicationController
  before_action :load_commentable

  def index
    @comment = @commentable.comments
  end

  def new
    @comments = @commentable.comments.new
  end

  def create
    @comment = @commentable.comments.new(comment_params)
    if @comment.save
      redirect_to @commentable, notice: "コメントしました"
    else
      render :new
    end
  end

  private
  # URLからEventかArticleを取得する
  # ex: /events/:id/comments
  # ex: /articles/:id/comments
  def load_commentable
    resource, id = request.path.split('/')[1, 2]
    @commentable = resource.singularize.classify.constantize.find(id)
  end

  # 他の方法
  # def load_commentable
  #   klass = [Event, Article].detect { |c| params["#{c.name.underscore}_id"] }
  #   @commentable = klass.find(params["#{klass.name.underscore}_id"])
  # end

  def comment_params
    params
  end

end