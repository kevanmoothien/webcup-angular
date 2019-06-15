require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
if defined?(Bundler)
  # If you precompile assets before deploying to production, use this line
  # Bundler.require(*Rails.groups(:assets => %w(development test)))
  # If you want your assets lazily compiled in production, use this line
  Bundler.require(:default, :assets, Rails.env)
end

module Webcup
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    #Allow Devise to respond with JSON (for angular devise)
   config.to_prepare do
     DeviseController.respond_to :html, :json
   end

   # Enable the asset pipeline
   config.assets.enabled = true

   # Disable application initialize on precompile (heroku faq: fixes database access error on precompile)
   config.assets.initialize_on_precompile = false

   # Precompile additional assets (application.js, application.css, and all non-JS/CSS are already added)
   config.assets.precompile += %w( active_admin.css active_admin/print.css active_admin.js )

   
  end
end
