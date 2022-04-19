import { log } from "../../utils/general";
import "./List.style.css"

type ListProps = {
  children: any
}

const List = ({ children }: ListProps) => {
  log(children)
  const items = !children ? [] : Array.isArray(children) ? children  : [children]

  if (items.length === 0) {
    return <>no items</>
  }

  return (
    <ul className="list">
      {items.map(c => (
        <li className="item">{c}</li>
      ))}
    </ul>
  );
}

export default List;
