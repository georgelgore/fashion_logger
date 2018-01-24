class Api::V1::UsersController < ApplicationController

  def index
    all_users = User.all
    @users = all_users.map { |user|
      {id: user.id, username: user.username, email: user.email, topics: user.topics}
      }
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: {id: @user.id, username: @user.username, email: @user.email, topics: @user.topics}
  end

  def create
    @user = User.create(user_params)
    render json: {id: @user.id, username: @user.username, email: @user.email, topics: @user.topics}
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
