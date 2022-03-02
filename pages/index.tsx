import styles from './index.module.css'

function Heading(props){
  return (
    <div>
    <h1 className={styles.red}>{props.heading}</h1>
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
