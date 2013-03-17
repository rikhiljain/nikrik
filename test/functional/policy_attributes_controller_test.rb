require 'test_helper'

class PolicyAttributesControllerTest < ActionController::TestCase
  setup do
    @policy_attribute = policy_attributes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:policy_attributes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create policy_attribute" do
    assert_difference('PolicyAttribute.count') do
      post :create, policy_attribute: { attrib_name: @policy_attribute.attrib_name, attrib_value: @policy_attribute.attrib_value, company_id: @policy_attribute.company_id, plan: @policy_attribute.plan, policy_type: @policy_attribute.policy_type }
    end

    assert_redirected_to policy_attribute_path(assigns(:policy_attribute))
  end

  test "should show policy_attribute" do
    get :show, id: @policy_attribute
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @policy_attribute
    assert_response :success
  end

  test "should update policy_attribute" do
    put :update, id: @policy_attribute, policy_attribute: { attrib_name: @policy_attribute.attrib_name, attrib_value: @policy_attribute.attrib_value, company_id: @policy_attribute.company_id, plan: @policy_attribute.plan, policy_type: @policy_attribute.policy_type }
    assert_redirected_to policy_attribute_path(assigns(:policy_attribute))
  end

  test "should destroy policy_attribute" do
    assert_difference('PolicyAttribute.count', -1) do
      delete :destroy, id: @policy_attribute
    end

    assert_redirected_to policy_attributes_path
  end
end
