import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({ characters, onClose }) {
  return (
    <div className="cards_container">      
        {
          characters.map(({id,name,species,gender,image,myFavorites}) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}             
                image={image}
                onClose={onClose}
                myFavorites={myFavorites}
              ></Card>
            );
          })}      
    </div>
  );
}
