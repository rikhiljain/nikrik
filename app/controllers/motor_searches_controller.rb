class MotorSearchesController < ApplicationController
  # GET /motor_searches
  # GET /motor_searches.json
  def index
    @motor_searches = MotorSearch.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @motor_searches }
    end
  end

  # GET /motor_searches/1
  # GET /motor_searches/1.json
  def show
    @motor_search = MotorSearch.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @motor_search }
    end
  end

  # GET /motor_searches/new
  # GET /motor_searches/new.json
  def new
    @motor_search = MotorSearch.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @motor_search }
    end
  end

  # GET /motor_searches/1/edit
  def edit
    @motor_search = MotorSearch.find(params[:id])
  end

  # POST /motor_searches
  # POST /motor_searches.json
  def create
    @motor_search = MotorSearch.new(params[:motor_search])

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
    @motor_search = MotorSearch.find(params[:id])

    respond_to do |format|
      if @motor_search.update_attributes(params[:motor_search])
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
    @motor_search = MotorSearch.find(params[:id])
    @motor_search.destroy

    respond_to do |format|
      format.html { redirect_to motor_searches_url }
      format.json { head :no_content }
    end
  end
end
