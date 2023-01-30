import styles from "./Test.module.css";
import React from "react";

const Test = function (prop) {
    return (
        <div className="tw-my-flex tw-h-screen">
            <h1 className={styles.fontSize}>Hello World!</h1>
        </div>
    );
};

export default Test;
