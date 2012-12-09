require 'test_helper'

class RtosControllerTest < ActionController::TestCase
  setup do
    @rto = rtos(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:rtos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create rto" do
    assert_difference('Rto.count') do
      post :create, rto: { city: @rto.city, code: @rto.code, state: @rto.state, sub_code: @rto.sub_code }
    end

    assert_redirected_to rto_path(assigns(:rto))
  end

  test "should show rto" do
    get :show, id: @rto
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @rto
    assert_response :success
  end

  test "should update rto" do
    put :update, id: @rto, rto: { city: @rto.city, code: @rto.code, state: @rto.state, sub_code: @rto.sub_code }
    assert_redirected_to rto_path(assigns(:rto))
  end

  test "should destroy rto" do
    assert_difference('Rto.count', -1) do
      delete :destroy, id: @rto
    end

    assert_redirected_to rtos_path
  end
end
