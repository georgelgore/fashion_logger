class Api::V1::TopicsController < ApplicationController
  def index
    @topics = Topic.all
    render json: @topics
  end

  def show
    @user = Topic.find(params[:id])
    render json: @topic
  end

  def create
    @topic = Topic.create(topic_params)
    render json: @topic
  end

  def destroy
    @topic = Topic.find(params[:id])
    @topic.destroy
  end


  private

  def topic_params
    params.require(:topic).permit(:name, :category, :user_id)
  end
end
