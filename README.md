# NoNo Game

## Abstract
The main aim of this project is to create an application on the theme "NoNo Game" using modern web development approached based on JavaScript. Technologies  were used: HTML5, SCSS, Bootstrap theme, JS Framework React.

Application runs on Heroku cloud hosting. - https://mkriventsev-kaj-sem.herokuapp.com/

More information about Nonogram game - [https://en.wikipedia.org/wiki/Nonogram]

## Functionality

Below the main pages and functionality will be described

### Main page:
- The Home page contains interactive, drawn using SVG nonogram board in form of logo.
- There are 4 buttons there:
    - New game
    - Statistics
    - Settings
    - Feedback 

#### New Game
This is the page where user can play the game. There are 2 stages of game initiation.
- Choosing game level and complexity (size)
- Playing the game after level was chosen

#### Select level

On this first stage user have to choose one of the board sizes (5x5, 10x10, 15x15), and level.
After that user can start the game.

#### Game page
On the game page user see the play board with rows numbers, columns cumbers and greed.
Below the board there are 3 buttons:
- Start Over - reset current level
- Change Mode - user can fill the cells with fill ■ and guess X modes.
- Seect Level - user will be redirected to first stage of game, where he can select size and level.

On the side is a button that allows you to control the music. User can turn on / off background music.

Above the board the timer is located. After finishing the game final time will be stored.

After the level is finished the modal form with congratulations will be shown and user can go to next level (or back to select level stage in case the level was last in the size).

### Statistics

On statistic page user can see his own statistic of the game. How successfully he solved the levels, best, worst and average times.

Clicking on the button with trash bin user can erase statistics for each level.


### Settings

On settings page user can manage game settings such as:
- Music preferences
- Sound effects preferences
Also, below the settings the short game instructions with short video are located.

#### Used audio tracks from sources:

Music: https://www.chosic.com 

Yugen - Emotional Ethnic Music by Keys of Moon | https://soundcloud.com/keysofmoon<br />
Attribution 4.0 International (CC BY 4.0)<br />
https://creativecommons.org/licenses/by/4.0/<br />
Music promoted by https://www.chosic.com/ 

Mirage by Hayden Folker | https://soundcloud.com/hayden-folker<br />
Music promoted by https://www.chosic.com<br />
Creative Commons Attribution 3.0 Unported License<br />
https://creativecommons.org/licenses/by/3.0/deed.en_US 

#### Music preferences

- Switch on/off the music which is playing during the game
- Change music volume level
- Select one from 5 suggested music themes (Africa, Japan, Water, Forest, Asia)

#### Sound effects preferences

- Switch on/off the sound effects
- Change effect volume level


### Feedback

On the feedback page user can fill the feedback form. <br />By clicking on Submit button the user's default email client will be opened with message which will be prefilled with form values.



# Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Project's appearance was bootstrapped mainly from [BootsWatch Sketchy](https://bootswatch.com/sketchy/)

NoNoGame is Single-page application developed using React framesork.

For storing user preferences and statistics the Local Storage API was used

Audio accompaniment - playing audion uding JS

Interactive SVG logo on the main page

Regitered default Service Worker used for making the app running in offline mode,


# How to run on localhost

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will be reloaded if you make edits.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
