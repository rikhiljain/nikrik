class LoyaltyController < ApplicationController
  
  def rewards
     @rewards = Loyalty::Reward.find_by_user(params[:id])

     @total_points = 0

     @rewards.each do |reward|
     
      if reward.status == 'EARN'
        @total_points += reward.points
      end

      if reward.status == 'USED'
        @total_points -= reward.points
      end

     end

     respond_to do |format|
      format.html { render :template => '/loyalty/rewards'}
      format.json { render json: @search }
    end

  end

   def referance
    @referance = Loyalty::Referance.find(params[:id])
    
    respond_to do |format|
      format.html { render :template => '/loyalty/edit_referance'}
   end

  end

  def find_referances
    @status = params[:status]
    if @status.nil?
      @status = 'OPEN'
    end
    @referances = Loyalty::Referance.find_by_status(@status)
    
    respond_to do |format|
      format.html { render :template => '/loyalty/find_referances'}
    end

  end

  def create_referance
  	referance = Loyalty::Referance.new(params[:refer])
  	referance.status = 'OPEN'

  	if (user_signed_in? && (current_user.has_role? :user) )
         referance.user_id = current_user.id
    end

  	Rails.logger.debug "Referance attributes : #{referance.inspect}"
  	
  	referance.save

  	redirect_to root_url, :notice => "We will Contact you within 24 hours"

  end

  def update_referance
    @referance = Loyalty::Referance.find(params[:id])
    new_referance = params[:loyalty_referance]

    Rails.logger.debug "Referance attributes : #{new_referance.inspect}"
    
    if new_referance[:status] == 'CONFIRM'
      points = Loyalty::PointEngine.calculate(new_referance[:amount], @referance.user_id)

      reward = Loyalty::Reward.new
      reward.points =  points
      reward.user_id =  @referance.user_id
      reward.status = 'EARN'
      reward.ref_type =  'REFERANCE'
      reward.exp_dt = Time.now + 1.year
      reward.ref_id = @referance.id
      
      reward.save

    end

    respond_to do |format|
      if @referance.update_attributes(new_referance)
        format.html { redirect_to '/loyalty/find_referances', notice: 'Referance was successfully updated.' }
      else
        format.html { render :template => '/loyalty/edit_referance'}
      end
    end

  end


  def user_referances
  	@referances = Loyalty::Referance.find_by_user(params[:id])
  	
  	respond_to do |format|
      format.html { render :template => '/loyalty/referances'}
      format.json { render json: @search }
    end

  end


  def products
    @products = Product.find_active_products()
    respond_to do |format|
      format.html { render :template => '/loyalty/products' }
    end
  end

  def purchase
     @product = Product.find(params[:id])
     if (user_signed_in? && (current_user.has_role? :user) )
         user_id = current_user.id
     end

    rewards =  Loyalty::Reward.find_by_user(user_id)

    @total_points = 0

    rewards.each do |reward|
     
      if reward.status == 'EARN'
        @total_points += reward.points
      end

      if reward.status == 'USED'
        @total_points -= reward.points
      end

    end

    respond_to do |format|
      format.html { render :template => '/loyalty/purchase' }
    end

  end

  def confirm
    product = Product.find(params[:id])
     if (user_signed_in? && (current_user.has_role? :user) )
         user_id = current_user.id
     end

    rewards =  Loyalty::Reward.find_by_user(user_id)

    total_points = 0

    rewards.each do |reward|
     
      if reward.status == 'EARN'
        total_points += reward.points
      end

      if reward.status == 'USED'
        total_points -= reward.points
      end

    end

    if total_points <= product.points
      notice = 'Your Points are not sufficient'
    else
      reward = Loyalty::Reward.new
      reward.points =  product.points
      reward.user_id =  user_id
      reward.status = 'USED'
      reward.ref_type =  'PRODUCT'
      reward.ref_id = product.id
      reward.save
      notice = 'Your Item will be shipped shortly'
    end

    respond_to do |format|
        format.html { redirect_to '/loyalty/products', notice: notice }
    end
    

  end

  def details
    reward =  Loyalty::Reward.find(params[:id])
    if params[:type] = 'PRODUCT'

    else
    
    end

  end


end
