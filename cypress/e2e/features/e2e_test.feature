@UI
Feature: Unsplash testing

  Background:
    Given I log in with account 'tue1996@gmail.com'

  @Scenario1 @skip
  Scenario: I am able to follow a photographer successfully
    Given I click the first photo on home page
    And I hover on icon user at the top left corner
    When I click the Follow button
    Then I verify that the Follow button text turn into Following

  @Scenario2
  Scenario: I am able to update the username URL in the Profile page
    Given I go to the Profile page
    When I click Edit Profile button
    And I edit the username field
    And I click the Update Account button
    And My username is updated correctly

  @Scenario3
  Scenario: List of liked photos
    Given Clean up liked photo
    When I like 3 random photos
    And I go to Profile > Likes section
    And I see the number of likes is 3
    Then 3 photos appear in Likes section

  @Scenario4
  Scenario: Remove photos from the collection successfully
    Given I create a private collection
    And I add 2 random photos to the newly created collection
    And I remove 1 photo from the newly created collection
    When I go to created collection
    Then I notice that the photo has been removed successfully from the collection and there is only 1 remaining photo in the collection

  @Scenario5 @skip
  Scenario: Download photo successfully
    Given I open a random photo
    When I download this photo
    Then I notice that the image is downloadable and the correct image has been saved