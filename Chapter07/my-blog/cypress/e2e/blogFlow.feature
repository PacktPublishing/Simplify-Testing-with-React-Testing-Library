Feature: Blog Application

  Scenario: A user can create a blog post. 
    Given I am on the home page
    When I click the "New Post" link
    When I fill out the new blog form
    When I click "Submit"
    Then I see the new post on the home page


  Scenario: A user can delete a blog post. 
    Given I am on the home page
    When I click the blog post name link
    When I click the delete link
    Then the post is removed from the home page
