# NZK Cards - Client

We're building a small card pack creator. 
The user starts with a list of all their cards. 
They can add/edit/remove cards in this list.

Each card is designed to look like our physical cards.

They have the following properties:
* name (string)
* skills (array)
* animalUrl (string)

The api is as follows:

GET /cards - Returns the list of cards
POST /cards - Create a card 
PUT /cards/{cardId} - Update a card
DELETE /cards/{cardId} - Remove a card

The payload for a card looks like this:

```javascript
{
  "name": "Sparky",
  "skills: [
    "draw": 1,
    "write": 2,
    "sing": 4,
    ... 
  ],
  "animalUrl": "http://www......"
}
```

A basic client project is provided, with webpack, css-loader, style-loader, babel and react all wired up. It's setup so you can use es6 if you want to.

*Commands*

To install run:

`$ yarn` 

To start the dev server run:

`$ yarn start`

Your app should open at `localhost:8000`

*Images*

To include images, put them in the `src/assets/images` folder and they are then available at `/images` when the dev server is running.

*Css*

You can add css files to the `src/styles` folder. You then need to require that file from you js file. There is an example in `/src/components/App.js`.

*Js/React*

Just add more react components to `src/components` and require them as needed.





