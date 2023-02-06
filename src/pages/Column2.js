import { useDrop } from "react-dnd";
import Movable from "./MovableCom";

const Column2 = () => {
  const [data, drop] = useDrop(() => ({
    accept: "first_type",
    drop: (item) => {
      console.log(item);
    },
    collect: (monitor) => {
      isOver: !!monitor.isOver();
    },
  }));
  console.log("data", data);
  return (
    <div ref={drop} className="border p-3 m-3 basis-[300px] rounded-sm">
      <h2>Completed</h2>
      <Movable text={"ongoing one"} />
      <Movable text={"ongoing two"} />
      <Movable text={"ongoing three"} />
      <Movable text={"ongoing four"} />
    </div>
  );
};

export default Column2;
