class Api::CommentsController < ActionController::API
  def create
    json = params.require(:comment).permit(:body, :rating, :product_id).to_h
    json.merge!(user_id: current_user.id)
    comment = Comment.create(json)
  end

  def update

  end

  def destroy

  end

end