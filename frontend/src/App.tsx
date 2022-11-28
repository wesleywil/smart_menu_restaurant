// Components
import MenuCourse from "./components/menu_course/menu_course.component";

import "./App.css";

function App() {
  return (
    <div className="flex flex-wrap gap-2 justify-center p-2">
      <MenuCourse name="Entree" />
      <MenuCourse name="Side Dishes" />
      <MenuCourse name="Main Course" />
      <MenuCourse name="Dessert" />
    </div>
  );
}

export default App;
