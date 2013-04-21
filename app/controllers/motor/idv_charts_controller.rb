class Motor::IdvChartsController < ApplicationController
  # GET /idv_charts
  # GET /idv_charts.json
  def index
    @idv_charts = Motor::IdvChart.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @idv_charts }
    end
  end

  # GET /idv_charts/1
  # GET /idv_charts/1.json
  def show
    @idv_chart = Motor::IdvChart.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @idv_chart }
    end
  end

  # GET /idv_charts/new
  # GET /idv_charts/new.json
  def new
    @idv_chart = Motor::IdvChart.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @idv_chart }
    end
  end

  # GET /idv_charts/1/edit
  def edit
    @idv_chart = Motor::IdvChart.find(params[:id])
  end

  # POST /idv_charts
  # POST /idv_charts.json
  def create
    @idv_chart = Motor::IdvChart.new(params[:idv_chart])

    respond_to do |format|
      if @idv_chart.save
        format.html { redirect_to @idv_chart, notice: 'Idv chart was successfully created.' }
        format.json { render json: @idv_chart, status: :created, location: @idv_chart }
      else
        format.html { render action: "new" }
        format.json { render json: @idv_chart.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /idv_charts/1
  # PUT /idv_charts/1.json
  def update
    @idv_chart = Motor::IdvChart.find(params[:id])

    respond_to do |format|
      if @idv_chart.update_attributes(params[:motor_idv_chart])
        format.html { redirect_to @idv_chart, notice: 'Idv chart was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @idv_chart.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /idv_charts/1
  # DELETE /idv_charts/1.json
  def destroy
    @idv_chart = Motor::IdvChart.find(params[:id])
    @idv_chart.destroy

    respond_to do |format|
      format.html { redirect_to idv_charts_url }
      format.json { head :no_content }
    end
  end
  
  def distinctMakers
  	results_distinctMakers = Motor::IdvChart.get_makers
  	options = results_distinctMakers.map do |result|
      {
          optionDisplay: result.maker,
          optionValue: result.maker
      }
    end
	  respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => options}
      format.json { render :json => options}
	  end
  end
  
  def models
    results = Motor::IdvChart.get_models(params[:manufacturer])
	  options = Array.new
   	results.each do |val|
  		options.push(Motor::SelectOption.new(val.id,val.model+"-"+val.subtype))
  	end
	
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml =>  options}
      format.json { render :json => options}
	  end
  end

  def motorValue
    mdate = DateTime.parse(params[:mdate])
    value = Motor::IdvChart.motor_value(params[:id], mdate)
    respond_to do |format|
      format.json { render :json => value}
    end
  end

end
