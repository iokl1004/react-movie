import React from "react";
import styles from "./Loading.module.css";

function Loading() {
    return (
        <div>
            <img className={styles.loading} src="/Loading.gif" />
        </div>
    );
}

export default Loading;