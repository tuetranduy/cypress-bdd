@UI
Feature: Unsplash testing

  Background:
    Given I log in with account 'tue1996@gmail.com'

  # @Scenario1
  # Scenario: I am able to follow a photographer successfully
  #   Given I click the first photo on home page
  #   And I hover on icon user at the top left corner
  #   When I click the Follow button
  #   Then I verify that the Follow button text turn into Following

  @Scenario2
  Scenario: I am able to update the username URL in the Profile page
    Given I go to the Profile page
    When I click Edit Profile button
    And I edit the username field
# And I click the Update Account button
# And I go to the Profile page again
# Then I observe that it will take me to the Profile page
# And My full name is displayed correctly