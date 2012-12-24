require 'test_helper'

class MotorPoliciesControllerTest < ActionController::TestCase
  setup do
    @motor_policy = motor_policies(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:motor_policies)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create motor_policy" do
    assert_difference('MotorPolicy.count') do
      post :create, motor_policy: { company_id: @motor_policy.company_id, discount: @motor_policy.discount, end_date: @motor_policy.end_date, policy_id: @motor_policy.policy_id, policy_path: @motor_policy.policy_path, premium: @motor_policy.premium, start_date: @motor_policy.start_date, user_id: @motor_policy.user_id }
    end

    assert_redirected_to motor_policy_path(assigns(:motor_policy))
  end

  test "should show motor_policy" do
    get :show, id: @motor_policy
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @motor_policy
    assert_response :success
  end

  test "should update motor_policy" do
    put :update, id: @motor_policy, motor_policy: { company_id: @motor_policy.company_id, discount: @motor_policy.discount, end_date: @motor_policy.end_date, policy_id: @motor_policy.policy_id, policy_path: @motor_policy.policy_path, premium: @motor_policy.premium, start_date: @motor_policy.start_date, user_id: @motor_policy.user_id }
    assert_redirected_to motor_policy_path(assigns(:motor_policy))
  end

  test "should destroy motor_policy" do
    assert_difference('MotorPolicy.count', -1) do
      delete :destroy, id: @motor_policy
    end

    assert_redirected_to motor_policies_path
  end
end
