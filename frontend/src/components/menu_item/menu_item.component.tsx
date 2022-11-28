type MenuItemType = {
  name: string;
  ingredients: string;
  price: number;
};

const MenuItem = ({ name, ingredients, price }: MenuItemType) => {
  return (
    <div className="flex flex-row gap-2 p-2 bg-white/20 rounded-xl">
      <div className="self-center">
        <img
          src="https://dummyimage.com/100x100"
          alt="menu_item_picture"
          className="rounded-full"
        />
      </div>

      <div className="self-center p-2 text-blue-400 font-bold">
        <h1 className="text-2xl">{name}</h1>
        <h2 className="text-xl">{ingredients}</h2>
        <h1 className="text-2xl">$ {price}</h1>
      </div>
      <img
        src="https://dummyimage.com/150x150"
        alt="qr_code_picture"
        className="rounded"
      />
    </div>
  );
};

export default MenuItem;
