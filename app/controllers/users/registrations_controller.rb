# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [ :create ]
  # before_action :configure_account_update_params, only: [:update]

  def new
    render inertia: "Auth/SignUpPage"
  end

  def create
    build_resource(sign_up_params)

    if resource.save
      sign_in(resource)
      redirect_to authenticated_root_path
    else
      redirect_to new_user_registration_url, inertia: { errors: resource.errors }
    end
  end

  # アカウント設定の編集ページ
  # def edit
  #   super
  # end

  # def update
  #   self.resource = resource_class.to_adapter.get!(current_user.to_key)

  #   params = account_update_params
  #   if params[:password].blank?
  #     params.delete(:password)
  #     params.delete(:password_confirmation)
  #   end

  #   if resource.update(params)
  #     bypass_sign_in(resource)
  #     redirect_to mypage_path
  #   else
  #     redirect_to mypage_path, inertia: { errors: resource.errors }
  #   end
  # end

  # def destroy
  #   resource.destroy
  #   Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
  #   redirect_to root_path
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
  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [ :name, :profile_image ])
  end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
