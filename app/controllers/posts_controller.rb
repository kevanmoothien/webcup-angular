class PostsController < InheritedResources::Base

  private

    def post_params
      params.require(:post).permit(:title, :subtitle, :body, :postType)
    end

end
