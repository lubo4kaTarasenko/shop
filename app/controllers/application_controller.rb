class ApplicationController < ActionController::Base
  rescue_from ActionController::InvalidAuthenticityToken do |exception|
    sign_out 
  end
end
