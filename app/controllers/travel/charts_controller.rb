class Travel::ChartsController < ApplicationController
  # GET /travel_charts
  # GET /travel_charts.json
  def index
    @travel_charts = Travel::Chart.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @travel_charts }
    end
  end

  # GET /travel_charts/1
  # GET /travel_charts/1.json
  def show
    @travel_chart = Travel::Chart.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @travel_chart }
    end
  end

  # GET /travel_charts/new
  # GET /travel_charts/new.json
  def new
    @travel_chart = Travel::Chart.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @travel_chart }
    end
  end

  # GET /travel_charts/1/edit
  def edit
    @travel_chart = Travel::Chart.find(params[:id])
  end

  # POST /travel_charts
  # POST /travel_charts.json
  def create
    @travel_chart = Travel::Chart.new(params[:travel_chart])

    respond_to do |format|
      if @travel_chart.save
        format.html { redirect_to @travel_chart, notice: 'Travel chart was successfully created.' }
        format.json { render json: @travel_chart, status: :created, location: @travel_chart }
      else
        format.html { render action: "new" }
        format.json { render json: @travel_chart.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /travel_charts/1
  # PUT /travel_charts/1.json
  def update
    @travel_chart = Travel::Chart.find(params[:id])

    respond_to do |format|
      if @travel_chart.update_attributes(params[:travel_chart])
        format.html { redirect_to @travel_chart, notice: 'Travel chart was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @travel_chart.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /travel_charts/1
  # DELETE /travel_charts/1.json
  def destroy
    @travel_chart = Travel::Chart.find(params[:id])
    @travel_chart.destroy

    respond_to do |format|
      format.html { redirect_to travel_charts_url }
      format.json { head :no_content }
    end
  end
end
