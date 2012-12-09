class RtosController < ApplicationController
  # GET /rtos
  # GET /rtos.json
  def index
    @rtos = Rto.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @rtos }
    end
  end

  # GET /rtos/1
  # GET /rtos/1.json
  def show
    @rto = Rto.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @rto }
    end
  end

  # GET /rtos/new
  # GET /rtos/new.json
  def new
    @rto = Rto.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @rto }
    end
  end

  # GET /rtos/1/edit
  def edit
    @rto = Rto.find(params[:id])
  end

  # POST /rtos
  # POST /rtos.json
  def create
    @rto = Rto.new(params[:rto])

    respond_to do |format|
      if @rto.save
        format.html { redirect_to @rto, notice: 'Rto was successfully created.' }
        format.json { render json: @rto, status: :created, location: @rto }
      else
        format.html { render action: "new" }
        format.json { render json: @rto.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /rtos/1
  # PUT /rtos/1.json
  def update
    @rto = Rto.find(params[:id])

    respond_to do |format|
      if @rto.update_attributes(params[:rto])
        format.html { redirect_to @rto, notice: 'Rto was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @rto.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rtos/1
  # DELETE /rtos/1.json
  def destroy
    @rto = Rto.find(params[:id])
    @rto.destroy

    respond_to do |format|
      format.html { redirect_to rtos_url }
      format.json { head :no_content }
    end
  end
end
