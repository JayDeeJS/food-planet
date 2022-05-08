import React from 'react';
import styles from './feedback.module.css';
import SingleComment from "./singleComment";

const Feedback = () => {
    return (
        <div className={styles.viewport}>
            <div className={styles.feedbackFrame}>
                <p className={styles.feedbackFont}>Отзывы</p>
            </div> <br/>
            <div className={styles.feedbackComments}>
                <SingleComment/>
                <SingleComment/>
                <SingleComment/>
                <SingleComment/>
            </div> <br/> <br/>
        </div>
    );
};

export default Feedback;