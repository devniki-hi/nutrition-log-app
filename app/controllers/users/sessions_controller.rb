class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # ログイン済みでもルートに行くことは確認済み
  def new
    render inertia: "Auth/LoginPage"
  end

  # POST /resource/sign_in
  def create
    user = User.find_by(email: params[:user][:email])
    if user&.valid_password?(params[:user][:password])
      sign_in(user)
      redirect_to authenticated_root_path
    else
      redirect_to new_user_session_url, inertia: {errors: {message:"メールアドレスまたはパスワードが違います。"}}
    end
  end

  # DELETE /resource/sign_out
  def destroy
    sign_out(current_user) if user_signed_in?
    redirect_to unauthenticated_root_path, status: :see_other
  end

  protected

  # Userモデルに書かれているモジュールによって許可されているパラメータが変わる
  # emailとpasswordとremember_meはデフォルトで許可されている
  # 追加で許可したいパラメータがあればここに追記する、ない場合はコメントアウトしておく
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
