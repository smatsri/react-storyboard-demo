import "./title.css"
type TitleProps = {
  text: string
  type: "primary" | "second"
}
const Title = ({ text, type }: TitleProps) => {
  switch (type) {
    case "second":
      return <h2>{text}</h2>

    default:
      return <h1>{text}</h1>
  }
}

export default Title;