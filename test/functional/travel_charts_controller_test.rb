require 'test_helper'

class TravelChartsControllerTest < ActionController::TestCase
  setup do
    @travel_chart = travel_charts(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:travel_charts)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create travel_chart" do
    assert_difference('TravelChart.count') do
      post :create, travel_chart: { age_end: @travel_chart.age_end, age_start: @travel_chart.age_start, company_id: @travel_chart.company_id, coverage: @travel_chart.coverage, days: @travel_chart.days, has_usa: @travel_chart.has_usa, plan: @travel_chart.plan, premium: @travel_chart.premium }
    end

    assert_redirected_to travel_chart_path(assigns(:travel_chart))
  end

  test "should show travel_chart" do
    get :show, id: @travel_chart
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @travel_chart
    assert_response :success
  end

  test "should update travel_chart" do
    put :update, id: @travel_chart, travel_chart: { age_end: @travel_chart.age_end, age_start: @travel_chart.age_start, company_id: @travel_chart.company_id, coverage: @travel_chart.coverage, days: @travel_chart.days, has_usa: @travel_chart.has_usa, plan: @travel_chart.plan, premium: @travel_chart.premium }
    assert_redirected_to travel_chart_path(assigns(:travel_chart))
  end

  test "should destroy travel_chart" do
    assert_difference('TravelChart.count', -1) do
      delete :destroy, id: @travel_chart
    end

    assert_redirected_to travel_charts_path
  end
end
