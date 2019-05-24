import React from "react";
import ReactDOM from "react-dom";


import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App.jsx';

import rootReducer from './reducers';
import {loadLevel} from "./services/game/api";
// Import thunk middleware
let defaultGame = {
    mower: {},
    game: {
        currentLevelId: 1,
        message: "hello world",


        actifLevel: {},
        events: {
            1: {
                condition: (game) => true,
                execute: (game) => {

                    return {...game, message: "tree don't talk !"}
                }


            },
            2: {
                condition: (game) => true,
                execute: (game) => {

                    return {...game, message: "girls talk, but not to you."}
                }


            }
        },


        levels: {
            1: {
                levelName: "A fresh start",
                canvas: [{


                    chipset: {
                        height: 3,
                        width: 4,
                        0: {render: "    \n    \n   ", block: true},
                        1: {render: " |  \n |  \n |"},
                        2: {render: "--- \n x  \nxxxx"},
                        3: {render: "Vvv \nV v \n  "}
                    },
                    spriteSet: {
                        1: {
                            render: "(\"))\n" +
                                "/Y\\\n" +
                                " jj "

                            , width: 4, height: 3
                        },

                        3: {
                            render: "$$\"$\n" +
                                " /pp\\\n" +
                                " //\\",
                            width: 4, height: 3,
                            description: " a girl"
                        },

                        4: {
                            render: "_--_\n" +
                                "jj\"j\n" +
                                " /M\\\n" +
                                " ll ",
                            width: 4, height: 4,
                            description: "your mother"
                        },

                        2: {
                            render: "   __  \n" +
                                " (_  _)__\n" +
                                "(___ ____)\n" +
                                " (_  _))\n" +
                                "   || \n" +
                                " _-  -_"
                            , width: 10, height: 6

                        },
                        5: {
                            render: "X\n X\n   X"
                            , width: 4, height: 3

                        },
                        6:{
                            render:"<<\\_/>>\n" +
                                  "   (='.'=)(¨)\n" +
                                  "  O(¨)_(¨)",
                            description:'bunny'

                        }, 7:{
                            render:"  A_A)\n" +
                                "   (>'Y'<)(\")\n" +
                                " cc(\")_(\")",
                            description:'cat'

                        }, 8:{
                            render:"  d_b\n" +
                                "  _\\'Q'/\n" +
                                " dd b",
                            description:'dog'},
                            9:{
                            render:"  d_b)\n" +
                                "   (°@°)\n" +
                                " U_U",
                            description:'pig'

                        }
                    },
                    content: [[3, 3, 3, 3, 3],
                        [1, 0, 0, 0, 1],
                        [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [2, 2, 2, 2, 2]],
                    sprites: [{
                        id: 2,
                        position: {x: 1, y: 3},
                        description: "a tree",
                        spriteEventId: 1
                    },

                        {
                            id: 3,
                            position: {x: 4, y: 3},
                            description: "a girl"
                        },

                        {
                            id: 4,
                            position: {x: 2, y: 2},
                            description: "someone else",
                            spriteEventId: 2
                        }/*,

                        {
                            id: 5,
                            position: {x: 0, y: 0},
                            description: "X"
                        },
                        {
                            id: 5,
                            position: {x: 1, y: 1},
                            description: "X"
                        }
                        ,{
                            id: 5,
                            position: {x: 2, y: 2},
                            description: "X"
                        }*/
                    ]


                }]


            }
        }
    }
};
loadLevel(defaultGame.game, 1);

console.log("hello web");
// use applyMiddleware to add the thunk middleware to the store
const store = createStore(rootReducer, defaultGame, applyMiddleware(thunk));

const wrapper = document.getElementById("my-app");
wrapper ? ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, wrapper) : false;
