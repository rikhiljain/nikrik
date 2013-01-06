class Motor::RtosController < ApplicationController
  # GET /rtos
  # GET /rtos.json
  def index
    @rtos = Motor::Rto.order(:city).where("city like ?", "%#{params[:term]}%")
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @rtos.map { |rto| {:id => rto.id, :value => rto.city + " (" + rto.state + ")" } } }
    end
  end

  # GET /rtos/1
  # GET /rtos/1.json
  def show
    @rto = Motor::Rto.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @rto }
    end
  end

  # GET /rtos/new
  # GET /rtos/new.json
  def new
    @rto = Motor::Rto.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @rto }
    end
  end

  # GET /rtos/1/edit
  def edit
    @rto = Motor::Rto.find(params[:id])
  end

  # POST /rtos
  # POST /rtos.json
  def create
    @rto = Motor::Rto.new(params[:motor_rto])

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
    @rto = Motor::Rto.find(params[:id])

    respond_to do |format|
      if @rto.update_attributes(params[:motor_rto])
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
    @rto = Motor::Rto.find(params[:id])
    @rto.destroy

    respond_to do |format|
      format.html { redirect_to motor_rtos_url }
      format.json { head :no_content }
    end
  end
end
