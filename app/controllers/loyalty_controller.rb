class LoyaltyController < ApplicationController
  
  def points
    @points = Loyalty::Point.find_by_user(params[:id])
    @total_points = m_total_points(@points)
    respond_to do |format|
      format.html { render :template => '/loyalty/points'}
      format.json { render json: @points }
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
    
    referral = Loyalty::Referral.new(params[:loyalty_referral])
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
      point.status = 'EARN'
      point.ref_type =  'REFERRAL'
      point.exp_dt = Time.now + 1.year
      point.ref_id = @referral.id
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
  	@referrals = Loyalty::Referral.find_by_user(params[:id])
  	
  	respond_to do |format|
      format.html { render :template => '/loyalty/referrals'}
      format.json { render json: @referrals }
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
     @reward = Reward.find(params[:id])
     if (user_signed_in? && (current_user.has_role? :user) )
         user_id = current_user.id
     end

    points =  Loyalty::Point.find_by_user(user_id)

    @total_points = m_total_points(points)

    respond_to do |format|
      format.html { render :template => '/loyalty/purchase' }
    end

  end

  def confirm
    reward = Reward.find(params[:id])
     if (user_signed_in? && (current_user.has_role? :user) )
         user_id = current_user.id
     end

    points =  Loyalty::Point.find_by_user(user_id)

    total_points = m_total_points(points)

    if total_points <= reward.points
      notice = 'Your Points are not sufficient'
    else
      point = Loyalty::Point.new
      point.points =  reward.points
      point.user_id =  user_id
      point.status = 'USED'
      point.ref_type =  'REWARD'
      point.ref_id = reward.id
      point.save
      notice = 'Your Reward item will be shipped shortly'
    end

    respond_to do |format|
        format.html { redirect_to '/loyalty/rewards', notice: notice }
    end
    

  end

  def details
    reward =  Loyalty::Point.find(params[:id])
    if params[:type] = 'REWARD'

    else
    
    end

  end

def m_total_points(points)
  
  total_points = 0
  points.each do |point|
    if point.status == 'EARN'
      total_points += point.value
    end
    if point.status == 'USED'
      total_points -= point.value
    end
  end
  return total_points
end

end
