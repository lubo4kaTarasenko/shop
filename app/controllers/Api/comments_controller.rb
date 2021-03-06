class Api::CommentsController < ActionController::API
  def create
    json = params.require(:comment).permit(:body, :rating, :product_id).to_h
    json.merge!(user_id: current_user.id)
    comment = Comment.create(json)
  end

  def update
    json = params.require(:comment).permit(:body, :rating, :id)
    comment = Comment.find(json[:id])
    comment.update(json) if comment.user_id == current_user.id
  end

  def destroy
    Comment.destroy(params[:id]) if Comment.find(params[:id]).user_id == current_user.id
  end
end
