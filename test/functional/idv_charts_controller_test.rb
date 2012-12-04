require 'test_helper'

class IdvChartsControllerTest < ActionController::TestCase
  setup do
    @idv_chart = idv_charts(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:idv_charts)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create idv_chart" do
    assert_difference('IdvChart.count') do
      post :create, idv_chart: { age_0_6: @idv_chart.age_0_6, age_12_24: @idv_chart.age_12_24, age_24_36: @idv_chart.age_24_36, age_36_48: @idv_chart.age_36_48, age_48_60: @idv_chart.age_48_60, age_60_72: @idv_chart.age_60_72, age_6_12: @idv_chart.age_6_12, age_72_84: @idv_chart.age_72_84, age_84_96: @idv_chart.age_84_96, age_96: @idv_chart.age_96, cubic: @idv_chart.cubic, fuel: @idv_chart.fuel, maker: @idv_chart.maker, model: @idv_chart.model, seats: @idv_chart.seats, subtype: @idv_chart.subtype }
    end

    assert_redirected_to idv_chart_path(assigns(:idv_chart))
  end

  test "should show idv_chart" do
    get :show, id: @idv_chart
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @idv_chart
    assert_response :success
  end

  test "should update idv_chart" do
    put :update, id: @idv_chart, idv_chart: { age_0_6: @idv_chart.age_0_6, age_12_24: @idv_chart.age_12_24, age_24_36: @idv_chart.age_24_36, age_36_48: @idv_chart.age_36_48, age_48_60: @idv_chart.age_48_60, age_60_72: @idv_chart.age_60_72, age_6_12: @idv_chart.age_6_12, age_72_84: @idv_chart.age_72_84, age_84_96: @idv_chart.age_84_96, age_96: @idv_chart.age_96, cubic: @idv_chart.cubic, fuel: @idv_chart.fuel, maker: @idv_chart.maker, model: @idv_chart.model, seats: @idv_chart.seats, subtype: @idv_chart.subtype }
    assert_redirected_to idv_chart_path(assigns(:idv_chart))
  end

  test "should destroy idv_chart" do
    assert_difference('IdvChart.count', -1) do
      delete :destroy, id: @idv_chart
    end

    assert_redirected_to idv_charts_path
  end
end
