import { useDrag } from "react-dnd";

const Movable = ({ text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "irrelevant",
    item: "item",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <li ref={drag} style={{ opacity }} className="p-3 my-1 rounded-md border">
      {text}
    </li>
  );
};

export default Movable;
