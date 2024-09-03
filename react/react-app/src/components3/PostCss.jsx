import React from 'react';
import styles from "../PostButton1.module.css"

const PostCss = () => {
    return (
        <div>
            <button className={styles.button}>버튼 1</button>
            <button className={styles.button2}>버튼 2</button>
        </div>
    );
};

export default PostCss;