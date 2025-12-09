class Users::UsersController < InertiaController
    before_action :authenticate_user!
  def mypage
    render inertia: "Users/MyPage", props: {
      user: current_user
    }
  end

  def edit
    render inertia: "Users/MyPageEdit", props: {
        user:current_user
    }
  end

  def update
    user = current_user

    if user.update(user_params)
      redirect_to mypage_path
    else
      redirect_to mypage_edit_path, inertia: { errors: user.errors }
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :name,
      :email,
      :avatar
    )
  end

end