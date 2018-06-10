Functional Requirements:

1. Develop a single page application by using one of the allowed MVV* frameworks.
   Done(Used AngularJs 1.5).
2. Design the UI, which should be motivated by the provided visuals.
   Done(Altered the ui a bit).
3. Implement user authentication. The content of this application should not be visible to public.
   Done.
4. User should be able to see video listings on index page. Only first 10 videos should be loaded initially.
   Done(First 12 Videos are loaded to give user a better view).
5. Lazy loading should be implemented i.e. More videos should appear as the user scrolls down the
   listing.
   Done(More videos are loaded as the user scrolls).
6. Users should not be able to play more than 1 video simultaneously. Playing a video should pause all
   other videos.
   Done.
7. Users should be able to rate videos, an overall rating for each video should also be displayed.
   Done(But users can rate a video multiple time.)
8. Users should be able to open the video details page by clicking on video title.
   Done(Three random videos are also generated as recommended Videos)
9. REST API should be consumed.
   Done.
10. Unit tests with at least 50% code coverage should be provided.
    Done(25% Coverage maybe)

Non-Functional Requirements

1. Code should be well documented by comments.
   Done.
2. Exception handling should be done, where necessary.
   Done.
3. Code should be well organized into files and folders.
   Done.
4. UI design should be clean and polished.
   Done.
5. CSS animations should be used to make the application more appealing.

6. UI should be cross-browser compatible.
   Done. (Was unable to test on IE)
7. UI should be cross-device compatible
   Done.



How to run project.

1. MongoDb should be running
2. Open Terminal and go to project folder
3. Run command "npm install"
4. Run command "npm start"
5. Go to http://localhost:3000 in browser
6. Login Credentials:
   username: ali
   password: 5f4dcc3b5aa765d61d8327deb882cf99


How to run unit tests:

1. Open terimal and go to client folder in project
2. Run command "npm install"
3. Run command "bower install"
4. Run command "gulp test"


Note: Client side code and unit test are in client folder of the project.
      Project is running from built code in dist folder inside client folder.
      All unit tests are with their respective code with spec.js inside the file name.
