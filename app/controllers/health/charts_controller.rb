class Health::ChartsController < ApplicationController
  # GET /health_charts
  # GET /health_charts.json
  def index
    @health_charts = Health::Chart.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @health_charts }
    end
  end

  # GET /health_charts/1
  # GET /health_charts/1.json
  def show
    @health_chart = Health::Chart.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @health_chart }
    end
  end

  # GET /health_charts/new
  # GET /health_charts/new.json
  def new
    @health_chart = Health::Chart.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @health_chart }
    end
  end

  # GET /health_charts/1/edit
  def edit
    @health_chart = Health::Chart.find(params[:id])
  end

  # POST /health_charts
  # POST /health_charts.json
  def create
    @health_chart = Health::Chart.new(params[:health_chart])

    respond_to do |format|
      if @health_chart.save
        format.html { redirect_to @health_chart, notice: 'Health chart was successfully created.' }
        format.json { render json: @health_chart, status: :created, location: @health_chart }
      else
        format.html { render action: "new" }
        format.json { render json: @health_chart.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /health_charts/1
  # PUT /health_charts/1.json
  def update
    @health_chart = Health::Chart.find(params[:id])

    respond_to do |format|
      if @health_chart.update_attributes(params[:health_chart])
        format.html { redirect_to @health_chart, notice: 'Travel chart was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @health_chart.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /health_charts/1
  # DELETE /health_charts/1.json
  def destroy
    @health_chart = Health::Chart.find(params[:id])
    @health_chart.destroy

    respond_to do |format|
      format.html { redirect_to health_charts_url }
      format.json { head :no_content }
    end
  end
end
