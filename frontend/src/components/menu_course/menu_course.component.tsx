import MenuItem from "../menu_item/menu_item.component";

type MenuCourseType = {
  name: string;
};

const MenuCourse = ({ name }: MenuCourseType) => {
  return (
    <div className="flex flex-col gap-2 bg-black p-4 rounded-xl">
      <h1 className="text-blue-500 text-4xl font-bold">{name}</h1>
      <MenuItem
        name="food_name"
        ingredients="ingredient + ingredient + ingredient"
        price={12.5}
      />
      <MenuItem
        name="food_name"
        ingredients="ingredient + ingredient + ingredient"
        price={12.5}
      />
    </div>
  );
};

export default MenuCourse;
