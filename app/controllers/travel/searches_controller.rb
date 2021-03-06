class Travel::SearchesController < ApplicationController
  wrap_parameters :search, :format => [:json, :xml]

  def index
    @searches = Travel::Search.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @searches }
    end
  end

  def show
    @search = Travel::Search.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @search }
    end
  end


def quote
   #valid_json_format = '{"cng_type":"LPG","cng_value":1000,"elec_acc":200,"has_anti_theft":true,"has_claim":true,"idv_chart_id":1,"is_aai_member":false,"ncb":20,"new_policy":false,"non_elec_acc":2000,"passenger_coverage_amt":100000,"policy_exp_date":"2012-12-12","register_city":"Delhi","register_type":"Company","year_of_manufacture":"2012-12-12"}'
   Rails.logger.error "New post: #{params[:search].inspect}"
   new_search = Travel::Search.new(params[:search] )

   new_search.save

   premiums = Travel::Premium.new(new_search).calculate_premium

   premiums.each do |premium|    
    premium.travel_search_id = new_search.id
    Rails.logger.info "Final Premium= #{user_signed_in?}"
    Rails.logger.info "Final Premium= #{current_user}"
    if (user_signed_in? && (current_user.has_role? :user) )
          premium.user_id = current_user.id
    end
   end

   respond_to do |format|
    format.json { render json: premiums }
   end
   
  end

  def buy
    
    existing_travel_search = Travel::Search.find(params[:id])
    existing_travel_search.company_name = params[:company_name]
    existing_travel_search.final_premium = params[:final_premium]
    existing_travel_search.name = params[:name]
    existing_travel_search.email_id = params[:email_id]
    existing_travel_search.mobile_number = params[:mobile_number]
    existing_travel_search.address = params[:address]     

    existing_travel_search.save

    ContactMailer.delay.buy_travel_email(existing_travel_search)

    render :json => existing_travel_search

  end

  def quoteEmail
    Rails.logger.info "Email quote object= #{params}"
    ContactMailer.delay.quote_travel_email(params[:name], params[:email_id], params[:mail])
    render :json => params
  end   

end
