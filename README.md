# jamBand

jamBand is an app to solve some of the organizational issues that surround jam nights attended by local musicians.  jamBand is intended to take the place of simply writing your name and instrument on a list with other musicians and waiting to be called up on stage.  Instead, the app allows users to enter their name, instrument, whether or not they sing, and if they have any friends they would like to be grouped with.  When a user clicks "submit", their information is timestamped and that information is displayed on their player card.  The event organizer is then able to add each musician to a group based on their instrument and credentials, and users are able to see whom they will be playing with, as well as what time they will be hitting the stage!

## Getting Started

The live jamBand app can be accessed here:  https://jamband-85356.firebaseapp.com/

Instructions:<br/>
![Alt text](/screenshots/homeScreen.png?raw=true "homeScreen")<br/>
![Alt text](/screenshots/signInForm.png?raw=true "signInForm")<br/>
1. Add your name, instrument, preference on singing, and any friends you would like to play with to the form.
2. Click 'Submit' to add your information to the list of players.
3. Once you have signed in, you will be able to find yourself at the bottom of the list of players, and the time that you signed up.<br/>
![Alt text](/screenshots/playerCard.png?raw=true "playerCard")<br/>
4. Review the information to make sure everything you entered is correct.
5. If any information is incorrect, or you need to leave the venue, you are able to use the "Delete" button on your player card and take yourself out of the queue.
6. The event organizer will be able to see that you have signed up for the evening's events, and will add you to a group.<br/>
![Alt text](/screenshots/groupCard.png?raw=true "groupCard")<br/>
7. Once you have been added to a group, you will be able to see who you are performing with, and what time you will be playing.
8. You will also have access to the other groups scheduled for the night, and what time they will be playing.<br/>


Fork and clone both repos below for development on your local machine.  
Front-End Repo:
https://github.com/nsolimine/jamband-frontend

Back-End Repo:
https://github.com/nsolimine/jamband-backend

### Prerequisites

Run [npm install] in your terminal to ensure that you access to all dependencies on your local repo.

```
"dependencies": {
  "vue": "^2.5.2",
  "vue-moment": "^3.2.0",
  "vue-router": "^3.0.1"

"devDependencies": {
  "autoprefixer": "^7.1.2",
  "babel-core": "^6.22.1",
  "babel-eslint": "^8.2.1",
  "babel-helper-vue-jsx-merge-props": "^2.0.3",
  "babel-loader": "^7.1.1",
  "babel-plugin-syntax-jsx": "^6.18.0",
  "babel-plugin-transform-runtime": "^6.22.0",
  "babel-plugin-transform-vue-jsx": "^3.5.0",
  "babel-preset-env": "^1.3.2",
  "babel-preset-stage-2": "^6.22.0",
  "chalk": "^2.0.1",
  "copy-webpack-plugin": "^4.0.1",
  "css-loader": "^0.28.0",
  "eslint": "^4.15.0",
  "eslint-config-standard": "^10.2.1",
  "eslint-friendly-formatter": "^3.0.0",
  "eslint-loader": "^1.7.1",
  "eslint-plugin-import": "^2.7.0",
  "eslint-plugin-node": "^5.2.0",
  "eslint-plugin-promise": "^3.4.0",
  "eslint-plugin-standard": "^3.0.1",
  "eslint-plugin-vue": "^4.0.0",
  "extract-text-webpack-plugin": "^3.0.0",
  "file-loader": "^1.1.4",
  "friendly-errors-webpack-plugin": "^1.6.1",
  "html-webpack-plugin": "^2.30.1",
  "node-notifier": "^5.1.2",
  "optimize-css-assets-webpack-plugin": "^3.2.0",
  "ora": "^1.2.0",
  "portfinder": "^1.0.13",
  "postcss-import": "^11.0.0",
  "postcss-loader": "^2.0.8",
  "postcss-url": "^7.2.1",
  "rimraf": "^2.6.0",
  "semver": "^5.3.0",
  "shelljs": "^0.7.6",
  "uglifyjs-webpack-plugin": "^1.1.1",
  "url-loader": "^0.5.8",
  "vue-loader": "^13.3.0",
  "vue-style-loader": "^3.0.1",
  "vue-template-compiler": "^2.5.2",
  "webpack": "^3.6.0",
  "webpack-bundle-analyzer": "^2.9.0",
  "webpack-dev-server": "^2.9.1",
  "webpack-merge": "^4.1.0"
```

### Installing

1.  In your terminal, navigate to the cloned Front-End Repo directory.
2.  In your terminal, type [PORT=8080 npm start]
3.  In your browser's address bar, type [localhost:8080]
4.  jamBand should now render in your browser window


* [Vue.js](https://vuejs.org/) - JS front-end framework
* [bootswatch](https://bootswatch.com/) - Styling


## Author

* **Nicholas Solimine** - *Full Stack Developer* - [LinkedIn](https://www.linkedin.com/in/nsolimine/)


## License

This project is licensed under the MIT License

## Acknowledgments

* Galvanize instructional staff
* My fellow G70 students
* Stack Overflow
