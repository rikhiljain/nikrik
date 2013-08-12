class Motor::SearchesController < ApplicationController
  wrap_parameters :search, :format => [:json, :xml]

  # GET /motor_searches
  # GET /motor_searches.json
  def index
    motor_searches = Motor::Search.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @motor_searches }
    end
  end

  # GET /motor_searches/1
  # GET /motor_searches/1.json
  def show
    motor_search = Motor::Search.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: motor_search }
    end
  end

  # GET /motor_searches/new
  # GET /motor_searches/new.json
  def new
    @motor_search = Motor::Search.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @motor_search }
    end
  end

  # GET /motor_searches/1/edit
  def edit
    @motor_search = Motor::Search.find(params[:id])
  end

  # POST /motor_searches
  # POST /motor_searches.json
  def create
    @motor_search = Motor::Search.new(params[:motor_motor_search])

    respond_to do |format|
      if @motor_search.save
        format.html { redirect_to @motor_search, notice: 'Motor search was successfully created.' }
        format.json { render json: @motor_search, status: :created, location: @motor_search }
      else
        format.html { render action: "new" }
        format.json { render json: @motor_search.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /motor_searches/1
  # PUT /motor_searches/1.json
  def update
    @motor_search = Motor::Search.find(params[:id])

    respond_to do |format|
      if @motor_search.update_attributes(params[:motor_motor_search])
        format.html { redirect_to @motor_search, notice: 'Motor search was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @motor_search.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /motor_searches/1
  # DELETE /motor_searches/1.json
  def destroy
    @motor_search = Motor::Search.find(params[:id])
    @motor_search.destroy

    respond_to do |format|
      format.html { redirect_to motor_motor_searches_url }
      format.json { head :no_content }
    end
  end

  def currentUser
    respond_to do |format|
      userJson = nil
      if(!current_user.nil?)
          userJson = {}
          current_user.attributes.each do |attr_name, attr_value| 
            if(!attr_name.nil?)   
              userJson[attr_name] = attr_value
            end
          end
          roles = []
          current_user.roles.each do |role|
            roles.push(role.name) 
          end
          userJson["roles"] = roles.uniq
      end
      format.json { render json: userJson }
    end
  end


  def quote
   #valid_json_format = '{"cng_type":"LPG","cng_value":1000,"elec_acc":200,"has_anti_theft":true,"has_claim":true,"idv_chart_id":1,"is_aai_member":false,"ncb":20,"new_policy":false,"non_elec_acc":2000,"passenger_coverage_amt":100000,"policy_exp_date":"2012-12-12","register_city":"Delhi","register_type":"Company","year_of_manufacture":"2012-12-12"}'
   new_search = Motor::Search.new(params[:search] )
   new_search.save

   premiums = Motor::CarPremium.new(new_search).calculate_premium

   premiums.each do |premium|    
    premium.motor_search_id = new_search.id
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

    existing_motor_search = Motor::Search.find(params[:id])
    existing_motor_search.company_name = params[:company_name]
    existing_motor_search.final_premium = params[:final_premium]
    existing_motor_search.name = params[:name]
    existing_motor_search.email_id = params[:email_id]
    existing_motor_search.mobile_number = params[:mobile_number]
    existing_motor_search.address = params[:address]     

    existing_motor_search.save

    idvChart = Motor::IdvChart.find(existing_motor_search.idv_chart_id)
    ContactMailer.delay.buy_motor_email(existing_motor_search,idvChart)

    render :json => existing_motor_search

  end

  def quoteEmail
    Rails.logger.info "Email quote object= #{params}"
    ContactMailer.delay.quote_motor_email(params[:name], params[:email_id], params[:mail])
    render :json => params 
  end
  
end
