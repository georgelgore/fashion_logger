class Api::V1::ImagesController < ApplicationController
  def index
    @images = Image.all
    render json: @images
  end

  def show
    @user = Image.find(params[:id])
    render json: @image
  end

  def create
    @image = Image.create(image_params)
    render json: @image
  end

  def destroy
    @image = Image.find(params[:id])
    @image.destroy
  end


  private

  def image_params
    params.require(:image).permit(:url, :title, :tag, :topic_id)
  end
end
