#Telmate Front-end Assessment

Thank you for taking the Telmate Front-End Assessment.  You have 48 hours to turn the following wireframe into a working application.  You can complete this assessment using any tools, libraries, or frameworks that you would like.

**Please use the attached jpegs and  the json file to complete this assessment.**

##Application Requirements

**Requirement 1**

	  GIVEN: I have a text input with a POST button
	  WHEN: I enter a string of text into the input and I click the POST button
	  THEN: It should post a maximum of 140 char of text to the appropriate message feed

**Requirement 2**

	  GIVEN: I have 3 buttons that represent message feed types
	  WHEN: I select the ALL feed button
	  THEN: I should see both public and private messages and when I post it should post to public feed

	  GIVEN: I have 3 buttons that represent message type
	  WHEN: I select the PUBLIC feed button
	  THEN: I should see and post ONLY to the public messages feed

	  GIVEN: I have 3 buttons that represent message type
	  WHEN: I select the PRIVATE feed button
	  THEN: I should see and post ONLY to the private messages feed

**Requirement 3**

	  GIVEN: A message feed
	  WHEN: A message is added to the feed
	  THEN:  It should have a profile pic, message, time posted, author's name, a reply button and a re-notify button

	  GIVEN: A message
	  WHEN: I mouse-over a message
	  THEN: The message should show its reply and re-notify button but be hidden without active mouseover

	  GIVEN: Reply button
	  WHEN: I click the reply button
	  THEN: The message input at the top of the screen should be auto filled with reply:@username

	  GIVEN: Re-notify button
	  WHEN: I click the Re-notify button
	  THEN: The message input at the top of the screen should be auto filled with renotify:

**Requirement 4**

	  GIVEN: The Attached JSON file
	  WHEN: When the page loads
	  THEN: The json file should be read and used to display a slideshow

	  GIVEN: The slide show in the sidebar
	  WHEN: The page loads
	  THEN: I should see a single image and only see the "next" button

	  GIVEN: The slide show in the sidebar
	  WHEN: I click the "next" button
	  THEN: It should transition to the next picture and also show the previous button

	  GIVEN: The slide show in the sidebar
	  WHEN: I click the "next" button and their are no more images after the currrent image
	  THEN: I should not see the "next" button

	  GIVEN: The slide show in the sidebar
	  WHEN: I am looking at the last image in the slide show and I click "previous" button
	  THEN: I should see the "next" button

