import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  console.log(foodItems);

  return (
    <>
      {/* render a MenuItem component for each element of the foodItems array */}
      {foodItems.map((item) => (
        <MenuItem
          key={item.id}
          itemName={item.itemName}
          description={item.description}
          foodImage={item.foodImage}
          price={item.price}
          isFavorite={item.isFavorite}
        />
      ))}
    </>
  );
}

export default MenuList;
