# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1)This indicates the controller that we are in, in this case it controls the blog posts for the app
class BlogPostsController < ApplicationController
  def index
    # 2) it assigns our @posts instance variable to be all the existing blog posts.
    @posts = BlogPost.all
  end

  def show
    # 3) assigns our instance variable to find a specific blog post by using it's given id.
    @post = BlogPost.find(params[:id])
  end

  # 4) it is a method that allows us to call our new blog post
  def new
  end

  def edit
  end

  def create
    # 5) lets us create a new blog post using strong params to ensure clean usable data.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) if it fails to destroy it redirects us to the post we are trying to destroy.
      redirect_to blog_post_path(@post)
    end
  end

  # 7)this is where we set our strong params
  private
  def blog_post_params
    # 8) permits the user to change the :title and :content
    params.permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) the model of our Blog Post
class BlogPost < ApplicationRecord
  # 10) establishes an active record association that lets Blog posts have many comments associated to it.
  has_many :comments
end
