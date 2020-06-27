Aplikace bude obsahovat několik stránek:

Hlavni - stránka na které uživatel bude mít možnost začat novou hru, otevřít statistiku, změnit nastaveni aplikaci a poslat zpětnou vazbu.
Nova hra - Po kliknutí uživatel zvolí obtížnost nonogramu (5x5, 10x10, 15x15) a otevře se stránka s nonogramem a začne se hra.
Stránka s hrou - na stránce uživatel bude řešit nonogram. Taky se spočítá čas pro budoucí statistiky.
Statistika - na stránce bude zobrazena statistika každého vyneseného nonogramu. Statistika obsahuje počet pokusu a čas řešeni.
Nastaveni - stránka obsahuje nastaveni aplikaci jako Ozvučení, Night mode(?), Reset score, a Navod pro uživatele.
Zpětná vazba - stránka obsahující formulář který umožňuje poslat email se zpětnou vazbou o aplikaci.


Technologie:

Single-page application + React.
Local Storage pro statistiky,
SVG/Canvas - pro vykresleni grafu statistiky,
Service Worker pro offline mode,
CSS animace a Audio pro lepši zdůrazněni interakce aplikace z uživatelem


Dokumentace             |Popis                              |Povinné        |Body
---------------------------------------------------------------------------------
                        cíl projektu, postup,
                        popis funkčnosti, komentáře ve
                        zdrojovém kódu                      X               1
---------------------------------------------------------------------------------

HTML 5 - 10
---------------------------------------------------------------------------------
Validita                Validní použití HTML5 doctype		X	            1

Validita                "Fungující v moderních prohlíčečích
                        v posledních vývojových verzích 
                        (Chrome, Firefox, Edge, Opera)"	                    2

Semantické značky       "správné použití sémantických       X               1
                        značek (section, article,
                        nav, aside, .)"
nav section
aside

Grafika - SVG / Canvas                                                      2   
анимация-хуяция

Média - Audio/Video                                                         1

Formulářové prvky       Validace, typy, placeholder, autofocus              2

Offline aplikace        "využití možnosti fungování                         1
                        stránky bez Internetového připojení
                        (viz sekce Javascript)"
---------------------------------------------------------------------------------			
				
CSS - 8
---------------------------------------------------------------------------------
Pokročilé selektory     použití pokročilých pseudotříd      X               1
                        a kombinátorů

Vendor prefixy                                                              1

CSS3 transformace 2D/3D                                                     2
скейлить иконки/кнопки

CSS3 transitions/animations                                 X               2
скейлить иконки/кнопки
менять цвет ховера кнопок
после выигрыша - анимация-хуяция

Media queries           stránky fungují i na mobilních                      2
                        zařízeních i jiných
                        (tedy nerozpadají se)
---------------------------------------------------------------------------------

Javascript - 12
---------------------------------------------------------------------------------
OOP přístup             prototypová dědičnost,              X               2
                        její využití,
                        jmenné prostory

Použití JS frameworku   použití a pochopení frameworku či                   1
či knihovny             knihovny jQuery, React, Vue ..

Použití pokročilých     využití pokročilých API (File API,  X               3
JS API                  Geolocation, Drag & Drop,
                        LocalStorage, Sockety, ...)

Funkční historie        posun tlačítky zpět/vpřed                           2
                        prohlížeče - pokud to vyplývá z
                        funkcionatilty (History API)

Ovládání medií          použití Média API (video, zvuk),                    1
                        přehrávání z JS

Offline aplikace        využití JS API pro zjišťování stavu                 1

JS práce se SVG         události, tvorba, úpravy                            2
---------------------------------------------------------------------------------

Ostatní - 5
---------------------------------------------------------------------------------
Kompletnost řešení                                                          3

Estetické zpracování                                                        2
---------------------------------------------------------------------------------


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
