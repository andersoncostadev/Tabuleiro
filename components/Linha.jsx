import Casa from "./Casa";
import styles from '../styles/Linha.module.css';

export default function (props) {
  return (
    <div className={styles.linha}>
      <Casa preta={props.preta} />
      <Casa preta={!props.preta} />
      <Casa preta={props.preta} />
      <Casa preta={!props.preta} />
      <Casa preta={props.preta} />
      <Casa preta={!props.preta} />
      <Casa preta={props.preta} />
      <Casa preta={!props.preta} />
    </div>
  )
}