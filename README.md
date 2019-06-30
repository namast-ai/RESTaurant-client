This restaurant inventory application was designed and coded by Adam Caplan, Jeremy Denton, Merritt Blanks, and Oliver Sablove, as part of a project for General Assembly.

The app is designed to provide an easy way for restaurants to track their inventory.

## Instructions
Sign up with an email address and password, and then sign in to begin using the app!

To edit password: click on the dropdown menu in the upper left corner of the main screen, and select "Change Password".
To sign out: click on the dropdown menu in the upper left corner of the main screen, and select "Sign Out".

To create a new item: click on the "+" button at the bottom of the main page, and complete the form by adding name, quantity, price, and threshold of the item. Threshold is the amount at which item quantity reaches danger level. Any quantity at or below the danger level is represented by a red reorder status; warning zone (between threshold and 150% of threshold) is represented by a yellow reorder status; quantities above 150% of threshold hav a green reorder status.

To update an item: click on the pencil icon to the right of the item you want to edit, and fill out the entire form.

To delete an item: click on the trash can icon to the right of the item you want to delete, and then confirm that you want to delete it.

To search for an item: enter all or part of the item name in the search bar at the top of the page then click on the maginfying glass icon.

## Relevant Links
Frontend deployed: https://namast-ai.github.io/RESTaurant-client/
Backend repo: https://github.com/namast-ai/RESTaurant-API
Backend deployed: https://morning-hollows-81329.herokuapp.com/

## Technologies Used
- HTML
- CSS
- JavaScript
- Handlebars

## Wireframe
https://imgur.com/rlxie4C

## User Stories
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create an item.
- As a signed in user, I would like to update my item.
- As a signed in user, I would like to delete my item.
- As a signed in user, I would like to see all items.
- As a signed in user, I would like to see the quantity and price of each item.

## Development process
This app was prepared in three business days, with some final touches added in the two days that followed. Our team worked together to create a vision for this project, including wireframes and an ERB. We created a GitHub profile, and used Git and ZenHub to organize and manage workflow. The actual coding of the project was a combination of individual efforts, pair programming, and mob programming. Our team implemented a series of 2-4 hour sprints to achieve specific goals. We checked in regularly, and met for modified versions of a scrum twice daily.

## Future Directions
Future versions of this application could include:
- a barcode generator or QR code generator
- functionality to alert user by email when quantities reach user-defined threshold/limit
- an option to add multiple restaurant locations, and to sort and search by location
- login and authentication for different user types (eg. owner, manager, inventory associate), and options to restrict functionality by user type
