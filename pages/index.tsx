import styles from './index.module.scss'

function Heading(props){
  return (
    <div>
    <h1 className={styles.red}><span>I&apos;m Red</span> {props.heading}</h1>
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
