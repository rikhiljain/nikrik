require 'test_helper'

class MotorDiscountsControllerTest < ActionController::TestCase
  setup do
    @motor_discount = motor_discounts(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:motor_discounts)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create motor_discount" do
    assert_difference('MotorDiscount.count') do
      post :create, motor_discount: { amount: @motor_discount.amount, company_id: @motor_discount.company_id, idv_chart_id: @motor_discount.idv_chart_id }
    end

    assert_redirected_to motor_discount_path(assigns(:motor_discount))
  end

  test "should show motor_discount" do
    get :show, id: @motor_discount
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @motor_discount
    assert_response :success
  end

  test "should update motor_discount" do
    put :update, id: @motor_discount, motor_discount: { amount: @motor_discount.amount, company_id: @motor_discount.company_id, idv_chart_id: @motor_discount.idv_chart_id }
    assert_redirected_to motor_discount_path(assigns(:motor_discount))
  end

  test "should destroy motor_discount" do
    assert_difference('MotorDiscount.count', -1) do
      delete :destroy, id: @motor_discount
    end

    assert_redirected_to motor_discounts_path
  end
end
