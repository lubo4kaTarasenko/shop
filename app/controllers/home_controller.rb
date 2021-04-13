module Wayforpay; def self.encrypt_secret_key; 'flk3409refn54t54t*FNJRET'; end end

require 'openssl'

module Wayforpay
  class EncryptField
    attr_reader :keys, :attrs

    def initialize(keys, attrs)
      @keys, @attrs = keys, attrs
    end

    def self.call(keys, attrs = {})
      new(keys, attrs).call
    end

    def call
      OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('md5'), Wayforpay.encrypt_secret_key, signature_string)
    end

    def signature_string
      attrs.values_at(*keys).compact.join(';')
    end
  end
end


class HomeController < ApplicationController
skip_before_action :verify_authenticity_token

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

values = {
  "orderReference": r_body['orderReference'],
  "status":"accept",
  "time": Time.now.to_i,
}
render json: values.merge(signature: Wayforpay::EncryptField.new(values.keys, values).call)

  end

end
