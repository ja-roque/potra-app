Rails.application.routes.draw do
  root 'welcome#index', as: 'home'

  get 'players/new',	as: 'new_player'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
