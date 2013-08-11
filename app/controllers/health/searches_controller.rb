class Health::SearchesController < ApplicationController
  wrap_parameters :search, :format => [:json, :xml]

  def index
    @searches = Health::Search.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @searches }
    end
  end

  def show
    @search = Health::Search.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @search }
    end
  end


def quote
   #valid_json_format = '{"cng_type":"LPG","cng_value":1000,"elec_acc":200,"has_anti_theft":true,"has_claim":true,"idv_chart_id":1,"is_aai_member":false,"ncb":20,"new_policy":false,"non_elec_acc":2000,"passenger_coverage_amt":100000,"policy_exp_date":"2012-12-12","register_city":"Delhi","register_type":"Company","year_of_manufacture":"2012-12-12"}'
   new_search = Health::Search.new(params[:search] )

   if new_search.no_of_childs.blank?
      new_search.no_of_childs = 0
   end

   if new_search.mother_age.blank?
      new_search.mother_age = 0
   end

   if new_search.father_age.blank?
      new_search.father_age = 0
   end

   if new_search.adult_age.blank?
      new_search.adult_age = 0
   end

   new_search.save

   premiums = Health::HealthPremium.new(new_search).calculate_premium

   premiums.each do |premium|    
    premium.health_search_id = new_search.id
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
    
    existing_health_search = Health::Search.find(params[:id])
    existing_health_search.company_name = params[:company_name]
    existing_health_search.final_premium = params[:final_premium]
    existing_health_search.name = params[:name]
    existing_health_search.email_id = params[:email_id]
    existing_health_search.mobile_number = params[:mobile_number]
    existing_health_search.address = params[:address]
    existing_health_search.plan = params[:plan]     

    existing_health_search.save

    ContactMailer.delay.buy_health_email(existing_health_search)

    render :json => existing_health_search

  end

  def quoteEmail
    Rails.logger.info "Email quote object= #{params}"
    ContactMailer.delay.quote_health_email(params[:name], params[:email_id], params[:mail])
    render nothing: true 
  end  

end
