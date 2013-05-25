class StaticHtmlsController < ApplicationController
  # GET /static_htmls
  # GET /static_htmls.json
  def index
    key = params[:key]
    value = StaticHtml.find_By_key(key)
    respond_to do |format|
      format.json { render json: value }
    end
  end
end