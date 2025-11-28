Rails.application.routes.draw do
  resources :foods
  devise_for :users,
              skip: [ :sessions, :registrations ],
              controllers: {
                sessions: "users/sessions",
                registrations: "users/registrations"
              }

  authenticated :user do
    root to: "dashboard#index", as: :authenticated_root
  end

  unauthenticated do
    root to: "static_pages#welcome", as: :unauthenticated_root
  end

  # カスタムパスを設定（asはDeviseが内部で期待する名前ルートを維持するため）
  devise_scope :user do
    # セッション用ルーティング
    get "/login", to: "users/sessions#new", as: "new_user_session"
    post "/login", to: "users/sessions#create", as: "user_session"
    delete "/logout", to: "users/sessions#destroy", as: "destroy_user_session"

    # アカウント登録・編集用ルーティング（プロフィールとは別物）
    get "/signup", to: "users/registrations#new", as: "new_user_registration"
    post "/signup", to: "users/registrations#create", as: "user_registration"
    put "/account", to: "users/registrations#update", as: "update_user_registration"
    delete "/account", to: "users/registrations#destroy", as: "destroy_user_registration"
  end
  # Redirect to localhost from 127.0.0.1 to use same IP address with Vite server
  # get "inertia-example", to: "inertia_example#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"
end
