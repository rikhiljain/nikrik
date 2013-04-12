class LoyaltyController < ApplicationController
  
  def points
    result = Hash.new 
    user_id = 0
    if (user_signed_in? && (current_user.has_role? :user) )
      user_id = current_user.id
    else
      render :json => { :status => :redirect, :to => "/login"
       }.to_json
      return
    end

    @points = Loyalty::Point.find_by_user(user_id)
    @total_points = m_total_points(@points)
    result[:total_points] = @total_points
    result[:points] = @points

    respond_to do |format|
      format.html { render :template => '/loyalty/points'}
      format.json { render json: result, :except=>  [:id, :user_id]}
    end

  end

  def referral
    @referral = Loyalty::Referral.find(params[:id])
    
    respond_to do |format|
      format.html { render :template => '/loyalty/edit_referral'}
    end

  end

  def find_referrals
    @status = params[:status]
    if @status.nil?
      @status = 'OPEN'
    end
    @referrals = Loyalty::Referral.find_by_status(@status)
    
    respond_to do |format|
      format.html { render :template => '/loyalty/find_referrals'}
    end

  end

  def create_referral
    referral = Loyalty::Referral.new
    referral.mobile = params[:mobile]
    referral.email = params[:email]
    referral.ref_name = params[:ref_name]
    referral.ref_mobile = params[:ref_mobile]
    referral.ref_desc = params[:ref_desc]

  	referral.status = 'OPEN'

  	if (user_signed_in? && (current_user.has_role? :user) )
         referral.user_id = current_user.id
    end

  	Rails.logger.debug "Referral attributes : #{referral.inspect}"
  	
  	referral.save

    ContactMailer.delay.referral_email(referral)

  	respond_to do |format|
      format.json { render :json => :success}
    end

  end

  def update_referral
    @referral = Loyalty::Referral.find(params[:id])
    new_referral = params[:loyalty_referral]

    Rails.logger.debug "referral attributes : #{new_referral.inspect}"
    
    if new_referral[:status] == 'CONFIRM'
      points = Loyalty::PointEngine.calculate(new_referral[:amount], @referral.user_id)

      point = Loyalty::Point.new
      point.value =  points
      point.user_id =  @referral.user_id
      point.status = 'EARNED'
      point.ref_type =  'REFERRAL'
      point.exp_dt = Time.now + 1.year
      point.ref_id = @referral.id
      point.desc = "Referral given for - <br>" + @referral.ref_name
      new_referral[:points] = points
      point.save

    end

    respond_to do |format|
      if @referral.update_attributes(new_referral)
        format.html { redirect_to '/loyalty/find_referrals', notice: 'Referral was successfully updated.' }
      else
        format.html { render :template => '/loyalty/edit_referral'}
      end
    end

  end


  def user_referrals
    user_id = 0
    if (user_signed_in? && (current_user.has_role? :user) )
      user_id = current_user.id
    else
      render :json => { :status => :redirect, :to => "/login"  }.to_json
      return
    end
  	@referrals = Loyalty::Referral.find_by_user(user_id)
  	
  	respond_to do |format|
      format.html { render :template => '/loyalty/referrals'}
      format.json { render json: @referrals, :except=>  [:id, :user_id] }
    end 

  end


  def rewards
    @rewards = Reward.find_active_rewards()
    respond_to do |format|
      format.html { render :template => '/loyalty/rewards' }
      format.json { render json: @rewards }
    end
  end

  def purchase
    #debugger
    result = Hash.new    
    if (user_signed_in? && (current_user.has_role? :user) )
      points =  Loyalty::Point.find_by_user(current_user.id)
      @total_points = m_total_points(points)
      result[:operationResult] = true
      result[:total_points] = @total_points
      result[:address] = current_user.address
      result[:mobile] = current_user.mobile
    else
      result[:operationResult] = false
    end
   
    respond_to do |format|
      format.html { render :template => '/loyalty/purchase' }
      format.json { render json: result }
    end

  end

  def confirm
    result = Hash.new
    reward = Reward.find(params[:id])
      if (user_signed_in? && (current_user.has_role? :user) )
        points =  Loyalty::Point.find_by_user(current_user.id)
        total_points = m_total_points(points)
        if total_points <= reward.points
          result[:result] = false
          result[:resultCode] = "NOT_SUFFICIENT_POINTS"
          result[:resultDesc] = "{'result': {'points': "+reward.points+"}, 'userPoints': "+total_points+"}"
        else
          point = Loyalty::Point.new
          point.value =  reward.points
          point.user_id = current_user.id
          point.status = 'USED'
          point.ref_type =  'REWARD'
          point.ref_id = reward.id
          point.desc = 'Purchased item - <br>' + reward.name
          point.save

          order = Order.new
          order.reward_id = reward.id;
          order.user_id = current_user.id
          order.points = reward.points
          order.status = 'In Progress'
          order.desc =  reward.name
          order.address = params[:address]
          order.mobile = params[:mobile]
          order.name = current_user.name
          order.order_num = "OD" + current_user.id.to_s + reward.id.to_s + Order.maximum("id").to_s
          order.save

          result[:result] = true
          result[:resultDesc] = ""
        end
        
      else
        result[:result] = false
        result[:resultCode] = "NOT_LOGGED_IN"
        result[:resultDesc] = ""
      end
      respond_to do |format|
        format.html { redirect_to '/loyalty/rewards', notice: notice }
        format.json { render :json => result }
      end
  end

  
  def m_total_points(points)
    
    total_points = 0
    points.each do |point|
      if point.status == 'EARNED'
        total_points += point.value
      end
      if point.status == 'USED'
        total_points -= point.value
      end
    end
    return total_points
  end

end
