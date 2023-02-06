import Movable from "./MovableCom";

const Column1 = () => {
    return(
        <div className="border p-3 m-3 basis-[300px] rounded-sm">
        <h2 className="font-[600] text-xl border-b">To do</h2>
        <Movable text={"todo one"} />
        <Movable text={"todo two"} />
        <Movable text={"todo three"} />
        <Movable text={"todo four"} />
      </div>
    )
}

export default Column1;