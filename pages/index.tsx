// Styled JSX

function Heading(props){
  const variables = Math.random() > 0.5 ? "red" : "blue";
  return (
    <div>
    <h1>{props.heading}</h1>
    <style jsx global>
        {`
          h1{
            color: ${variables};
          }
        `}
    </style>
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
