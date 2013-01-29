class LoyaltyController < ApplicationController
  
  def rewards
     @rewards = Loyalty::Reward.find_by_user(params[:id])

     respond_to do |format|
      format.html { render :template => '/loyalty/rewards'}
      format.json { render json: @search }
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

  def referance
  	@referances = Loyalty::Referance.find_by_user(params[:id])
  	
  	respond_to do |format|
      format.html { render :template => '/loyalty/referances'}
      format.json { render json: @search }
    end

  end


  def purchase
  
  end

end
