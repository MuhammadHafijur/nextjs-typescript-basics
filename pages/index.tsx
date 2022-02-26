// Styled JSX

function Heading(props){
  return (
    <div>
    <h1 className="red">{props.heading}</h1>
  </div>
  )
}

export default function Home() {
  return (
    <div>
      <Heading heading="Heading" />
      <h1>Hello</h1>
    </div>
  )
}
