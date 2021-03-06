import { useState } from "react";
import FavoritesIcon from "./FavoritesIcon";
import RecipeList from "../../recipeCard/RecipeList";
import "./Favorites.scss";


export default function Favorites({addToFavorites, removeFromFavorites, favorites, isFavorite}) {
    const [showCart, setShowCart] = useState(false);
    const toggleShow = () => setShowCart(!showCart);
  
    

    return (
        <main className="container">
            <FavoritesIcon length={favorites.length} toggleShow={toggleShow} />
            <RecipeList addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} favorites={favorites} isFavorite={isFavorite} showOnlyFavorites={true}
             />
            {showCart ? (
            <Favorites item={favorites} toggleShow={toggleShow} removeFromFavorites={removeFromFavorites} />
                
             ) : (
                 null
             )
             
             }        
             </main>
    );
}