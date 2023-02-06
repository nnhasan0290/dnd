import { useDrag } from "react-dnd";

const Movable = ({ text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "first_type",
    item: {
      id: 1,
      name: "movable name"
    },
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
