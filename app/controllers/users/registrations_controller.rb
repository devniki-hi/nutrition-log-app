# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [ :create ]
  # before_action :configure_account_update_params, only: [:update]

  def new
    render inertia: "Auth/SignUpPage",
                      props: {
                        errors: flash[:errors] ? { errors: flash[:errors] }: {}
                      }
  end

  def create
    build_resource(sign_up_params)

    if resource.save
      sign_in(resource)
      redirect_to authenticated_root_path
    else
      flash[:errors] = resource.errors
      redirect_to new_user_registration_url
    end
  end

  # アカウント設定の編集ページ
  # def edit
  #   super
  # end

  # アカウント設定の更新処理
  # def update
  #   super
  # end

  # アカウント削除処理
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  protected

  # default: email, password, password_confirmation
  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [ :name ])
  end

  # If you have extra params to permit, append them to the sanitizer.
  # default: email, password, password_confirmation, current_password
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:name, :profile_image])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
