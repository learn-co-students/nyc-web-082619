require 'test_helper'

class MusiciansControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get musicians_index_url
    assert_response :success
  end

  test "should get show" do
    get musicians_show_url
    assert_response :success
  end

  test "should get new" do
    get musicians_new_url
    assert_response :success
  end

  test "should get create" do
    get musicians_create_url
    assert_response :success
  end

  test "should get edit" do
    get musicians_edit_url
    assert_response :success
  end

  test "should get update" do
    get musicians_update_url
    assert_response :success
  end

  test "should get destroy" do
    get musicians_destroy_url
    assert_response :success
  end

  test "should get something" do
    get musicians_something_url
    assert_response :success
  end

  test "should get else" do
    get musicians_else_url
    assert_response :success
  end

end
