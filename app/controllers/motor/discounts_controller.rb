class Motor::DiscountsController < ApplicationController
  # GET /motor_discounts
  # GET /motor_discounts.json
  def index
    company_id = params[:company_id]
    if company_id.nil?
      company_id = '1'
    end

    @motor_discounts = Motor::Discount.find_by_company(company_id)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @motor_discounts }
    end
  end

  # GET /motor_discounts/1
  # GET /motor_discounts/1.json
  def show
    @motor_discount = Motor::Discount.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @motor_discount }
    end
  end

  # GET /motor_discounts/new
  # GET /motor_discounts/new.json
  def new
    @motor_discount = Motor::Discount.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @motor_discount }
    end
  end

  # GET /motor_discounts/1/edit
  def edit
    @motor_discount = Motor::Discount.find(params[:id])
  end

  # POST /motor_discounts
  # POST /motor_discounts.json
  def create
    @motor_discount = Motor::Discount.new(params[:motor_discount])

    respond_to do |format|
      if @motor_discount.save
        format.html { redirect_to @motor_discount, notice: 'Motor discount was successfully created.' }
        format.json { render json: @motor_discount, status: :created, location: @motor_discount }
      else
        format.html { render action: "new" }
        format.json { render json: @motor_discount.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /motor_discounts/1
  # PUT /motor_discounts/1.json
  def update
    @motor_discount = Motor::Discount.find(params[:id])

    respond_to do |format|
      if @motor_discount.update_attributes(params[:motor_discount])
        format.html { redirect_to @motor_discount, notice: 'Motor discount was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @motor_discount.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /motor_discounts/1
  # DELETE /motor_discounts/1.json
  def destroy
    @motor_discount = Motor::Discount.find(params[:id])
    @motor_discount.destroy

    respond_to do |format|
      format.html { redirect_to motor_discounts_url }
      format.json { head :no_content }
    end
  end
end
