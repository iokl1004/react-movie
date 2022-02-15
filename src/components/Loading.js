import styles from "./Loading.module.css";

function Loading() {
    return (
        <div className={styles.loader}>
          <strong>Loading...</strong>
        </div>
      )
}

export default Loading;