import {SEARCH, RATING, ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE} from "../constants/actions-types"
import {v4 as uuid4} from "uuid"

const movies = [
    {
      id: uuid4(),
      name: "The Lord of the Rings: The Rings of Power",
      rate: 3,
      year: `2022`,
      description: `Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.`,
      image: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg`,
      type: `Sci-Fi & Fantasy, Action & Adventure, Drama`,
      trailer : "https://www.youtube.com/embed/x8UAUAuKNcU"
    },
    {
      id: uuid4(),
      name: "The School for Good and Evil",
      rate: 5,
      year: `2022`,
      description: `Best friends Sophie and Agatha navigate an enchanted school for young heroes and villains — and find themselves on opposing sides of the battle between good and evil.`,
      image: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6oZeEu1GDILdwezmZ5e2xWISf1C.jpg`,
      type: `Fantasy, Action, Drama`,
      trailer : "https://www.youtube.com/embed/aftysDQ4hpI"
    },
    {
      id: uuid4(),
      name: "King Arthur: Legend of the Sword",
      rate: 4,
      year: `2017`,
      description: `When the child Arthur’s father is murdered, Vortigern, Arthur’s uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword Excalibur from the stone, his life is turned upside down and he is forced to acknowledge his true legacy... whether he likes it or not.`,
      image: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9kKXH6eJpzoFGhCbTN3FVwSQK3n.jpg`,
      type: `Fantasy, Action, Drama`,
      trailer : "https://www.youtube.com/embed/jIM4-HLtUM0"

    },
    {
      id: uuid4(),
      name: "The Lion King",
      rate: 4,
      year: `2019`,
      description: `Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.`,
      image: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg`,
      type: `Adventure, Family, Animation, Drama`,
      trailer : "https://www.youtube.com/embed/7TavVZMewpY"
    },
    {
      id: uuid4(),
      name: "The Walking Dead",
      rate: 2,
      year: `2010`,
      description: `Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.`,
      image: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg`,
      type: `Action & Adventure, Drama, Sci-Fi & Fantasy`,
      trailer : "https://www.youtube.com/embed/R1v0uFms68U"   

    },
    {
      id: uuid4(),
      name: "Grey's Anatomy",
      rate: 3,
      year: `2005`,
      description: `Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.`,
      image: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/daSFbrt8QCXV2hSwB0hqYjbj681.jpg`,
      type: `Drama`,
      trailer : "https://www.youtube.com/embed/qbkEtYz9acA"

    },
    {
      id: uuid4(),
      name: "Poliana Moça",
      rate: 2,
      year: `2022`,
      description: `Poliana is now a girl and will be 15 years old and this event caused a lot of problems even when the party ended now is another reason João or eric who is going to date Poliana?`,
      image: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/17yQZnnodzS1ZrKcpqHnQV8eQGN.jpg`,
      type: `Soap, Action & Adventure, Family`,
      trailer : "https://www.youtube.com/embed/hGx3H1QMvJ0"

    },
    {
      id: uuid4(),
      name: "Lisa",
      rate: 1,
      year: `2021`,
      description: `Dealing with guilt and grief, two friends use a Ouija board to contact their dead roommate for details about her death. Getting closer to the truth, a dark entity begins to haunt them. What they will uncover will follow them forever, unless they are able to stop it.`,
      image: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w2nOl7KhwcUj11YxEi9Nknj9cqu.jpg`,
      type: `Drama, Family`,
      trailer : "https://www.youtube.com/embed/OqcP_wkcl2I"
    },
    {
      id: uuid4(),
      name: "Star Wars: Tales of the Jedi",
      rate: 3,
      year: `2022`,
      description: `Journey into the lives of two distinctly different Jedi from the prequel era – Ahsoka Tano and Count Dooku. Each will be put to the test as they make choices that will define their destinies.`,
      image: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/l6p2eG9YDt7x6OgTC2PCW8yvVqb.jpg`,
      type: `Animation, Sci-Fi & Fantasy`,
      trailer : "https://www.youtube.com/embed/-uRRKqQbmw4"

    },
    {
      id: uuid4(),
      name: "The White Lotus",
      rate: 4,
      year: `2021`,
      description: `Follow the exploits of various guests and employees at an exclusive tropical resort over the span of a week as with each passing day, a darker complexity emerges in these picture-perfect travelers, the hotel’s cheerful employees and the idyllic locale itself.`,
      image: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gH5i3JbnLsyTvcImlofNvXtH3i5.jpg`,
      type: `Comedy, Drama, Mystery`,
      trailer : "https://www.youtube.com/embed/TGLq7_MonZ4"
    },
  ]

 const movieReducer = (state = movies, action) => {
  const newState = [...state]
    switch (action.type) {
      case ADD_MOVIE:
        return [...state, action.payload]
      case DELETE_MOVIE:
        state = state.filter(el => el.id !== action.payload)
        return state

        case UPDATE_MOVIE:
          // const newState = [...state]
          console.log('payload', action.payload)
          console.log('newState', newState.map(el => el.id === action.payload.id ? el = action.payload : el ))
          return state.map( el => el.id === action.payload.id ? el = action.payload : el )
      default: return state
    }
    
}

export default movieReducer