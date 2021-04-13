class HomeController < ApplicationController
skip_before_filter :verify_authenticity_token

  def index

#Logger.info(params.inspect)
#Logger.info(params)

    html = File.read(Rails.root.join('public/index.html').to_s)
    render html: html.html_safe
  end

  def webhook
    r_body = JSON.parse(request.body.read)
    Rails.logger.info(r_body)
    Rails.logger.info(params.inspect)    
  end
end
