class UserObserver < ActiveRecord::Observer

  def after_create(model)
	  point = Loyalty::Point.new
	  point.value =  100
	  point.user_id =  model.id
	  point.status = 'EARNED'
	  point.ref_type =  'SIGN_UP'
	  point.exp_dt = Time.now + 1.year
	  point.ref_id = model.id
	  point.desc = "Sign up 100 points"
	  point.save
  end

end
