import { legacy_createStore as createStore } from "redux";
import { v4 as uuid } from "uuid";

export let store = createStore(function(state, action) {
    if(action.type == 'user-signIn') {
        
       return state.map(item => {
        if(item.nickname == action.payload.nickname && item.password == action.payload.password ) {
          return {
            ...item,
            loggedIn: true,
            save: localStorage.setItem('userLoggedIn', true )
          }
          
        } else {return item }
      })
    }

    if(action.type == 'user-signUp') {
        return [
            ...state,
            {
              nickname: action.payload.nickname,
              name: action.payload.name,
              surname: action.payload.surname,
              password: action.payload.password,
              loggedIn: false,
              id: uuid(),
              posts: [],
              favorite: []
            }
          ]
    }

    return state
}, [
        {
          nickname: 'Tigran',
          name: 'Tigran',
          surname: 'Yeritsyan',
          password: 123,
          loggedIn: false,
          id: uuid(),
          posts: [],
          favorite: [],
        },
        {
          nickname: 'Armen',
          name: 'Armen',
          surname: 'Vardanyan',
          password: 123,
          loggedIn: false,
          id: uuid(),
          posts: [],
          favorite: []
        }
    ]
)