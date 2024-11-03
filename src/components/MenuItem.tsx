import { useState } from "react";

function MenuItem(props) {
  // Create a state isFavorite with the initial value from props
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  // Toggle the isFavorite state
  const handleClickFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        {/* The image will receive the URL src from the props */}
        <img src={props.foodImage} alt={props.itemName} />
        <figcaption>
          {/* The h2 will receive the item name from the props */}
          <h2>{props.itemName}</h2>
          {/* The p will receive the item description from the props */}
          <p>{props.description}</p>
        </figcaption>
      </figure>
      {/* The span will receive the item price from the props */}
      <aside>{props.price} EUR</aside>

      {/* Button to toggle the isFavorite state */}
      <button type="button" onClick={handleClickFavorite}>
        {isFavorite ? "❤️" : "🖤"}
      </button>
    </section>
  );
}

export default MenuItem;
