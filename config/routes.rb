Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  mount ActionCable.server, at: '/cable'
  
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]

    resources :servers, only: [:create, :destroy, :show, :index] do 
      resources :channels
    end

    resources :channels do
      resources :messages
    end
  end

end
