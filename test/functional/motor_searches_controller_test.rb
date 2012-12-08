require 'test_helper'

class MotorSearchesControllerTest < ActionController::TestCase
  setup do
    @motor_search = motor_searches(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:motor_searches)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create motor_search" do
    assert_difference('MotorSearch.count') do
      post :create, motor_search: { aai_member: @motor_search.aai_member, cng_kit: @motor_search.cng_kit, cng_kit_value: @motor_search.cng_kit_value, elec_acc: @motor_search.elec_acc, has_anti_theft: @motor_search.has_anti_theft, idv_chart_id: @motor_search.idv_chart_id, ncb: @motor_search.ncb, new_policy: @motor_search.new_policy, non_elec_acc: @motor_search.non_elec_acc, passenger_coverage_amt: @motor_search.passenger_coverage_amt, policy_exp_date: @motor_search.policy_exp_date, register_city: @motor_search.register_city, transfer_ncb: @motor_search.transfer_ncb, voluntary_excess: @motor_search.voluntary_excess, year_of_manufacture: @motor_search.year_of_manufacture }
    end

    assert_redirected_to motor_search_path(assigns(:motor_search))
  end

  test "should show motor_search" do
    get :show, id: @motor_search
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @motor_search
    assert_response :success
  end

  test "should update motor_search" do
    put :update, id: @motor_search, motor_search: { aai_member: @motor_search.aai_member, cng_kit: @motor_search.cng_kit, cng_kit_value: @motor_search.cng_kit_value, elec_acc: @motor_search.elec_acc, has_anti_theft: @motor_search.has_anti_theft, idv_chart_id: @motor_search.idv_chart_id, ncb: @motor_search.ncb, new_policy: @motor_search.new_policy, non_elec_acc: @motor_search.non_elec_acc, passenger_coverage_amt: @motor_search.passenger_coverage_amt, policy_exp_date: @motor_search.policy_exp_date, register_city: @motor_search.register_city, transfer_ncb: @motor_search.transfer_ncb, voluntary_excess: @motor_search.voluntary_excess, year_of_manufacture: @motor_search.year_of_manufacture }
    assert_redirected_to motor_search_path(assigns(:motor_search))
  end

  test "should destroy motor_search" do
    assert_difference('MotorSearch.count', -1) do
      delete :destroy, id: @motor_search
    end

    assert_redirected_to motor_searches_path
  end
end
