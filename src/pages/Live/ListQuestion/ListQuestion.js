import React, { useState } from 'react';
// import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './ListQuestion.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Option(props) {
    const { id, label, onOptionSelected, isChecked } = props;

    const handleOptionSelected = (event) => {
        onOptionSelected(id, event.target.checked);
    };

    return (
        <label className={cx('option')}>
            <input
                className={cx('checkbox_anwser')}
                type="checkbox"
                checked={isChecked}
                onChange={handleOptionSelected}
            />
            {label}
        </label>
    );
}

function ListQuestion() {
    const [answers, setAnswers] = useState({});
    const [mssv, setMssv] = useState('');
    const [answeredCount, setAnsweredCount] = useState(0);
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: 'Do you prefer working independently or in a team?',
            options: [
                { id: '1', label: 'yes' },
                { id: '0', label: 'no' },
            ],
        },
        {
            id: 2,
            question: 'Do you prefer working independently or working in a team?',
            options: [
                { id: '1', label: 'yes' },
                { id: '0', label: 'no' },
            ],
        },
        {
            id: 3,
            question: 'Do you prefer working on the computer all day or do you want to have some time outdoors?',
            options: [
                { id: '1', label: 'yes' },
                { id: '0', label: 'no' },
            ],
        },
        {
            id: 4,
            question: 'Do you like to entertain yourself on the computer?',
            options: [
                { id: '1', label: 'yes' },
                { id: '0', label: 'no' },
            ],
        },
        {
            id: 5,
            question: 'Do you have a personality that enjoys challenges in your work? ',
            options: [
                { id: '1', label: 'yes' },
                { id: '0', label: 'no' },
            ],
        },
        {
            id: 6,
            question: 'Do you have a personality that enjoys learning and sharing knowledge?',
            options: [
                { id: '1', label: 'yes' },
                { id: '0', label: 'no' },
            ],
        },
        {
            id: 7,
            question: 'Do you have the traits of patience and carefulness in your work? Rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 8,
            question: 'Do you have a creative and innovative personality in your work? Rate on a scale of 0-10',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 9,
            question: 'Do you have an open-minded and adaptable personality in your work? Rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 10,
            question: 'Do you have a proactive and dynamic personality in your work? Rate on a scale of 0-10',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 11,
            question: 'Do you have an organized and effective work management personality? Rate on a scale of 0-10',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 12,
            question: 'Do you enjoy solving complex problems? Rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 13,
            question: 'Do you have a sense of responsibility in your work? Rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 14,
            question: 'Do you enjoy analyzing and researching difficult issues? Rate yourself on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 15,
            question: 'Do you have good logical thinking skills? Rate yourself on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 16,
            question: 'Evaluate your English proficiency on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 17,
            question: 'Evaluate mathematical skills on a scale of (0-10).',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 18,
            question:
                'Do you enjoy explaining and guiding others to understand technology? Rate yourself on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 19,
            question: 'Do you enjoy exploring new technologies in the IT field? Rate yourself on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 20,
            question: 'Do you like working with numbers and data? Rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 21,
            question: 'Do you enjoy working with different programming languages? Rate on a scale of 0-10',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 22,
            question: 'Do you enjoy developing applications for mobile devices? Please rate on a scale of 0-10',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 23,
            question: 'Do you like to explore and research computer science? Rate on a scale of 0-10, please.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 24,
            question: 'Do you like programming on Linux operating system? Please rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 25,
            question: 'Do you enjoy developing computer games? Please rate yourself on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 26,
            question:
                'Do you like working with new technologies such as AI, IoT, Blockchain, etc.? Please rate yourself on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 27,
            question: 'Do you like developing web applications? Rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 28,
            question: 'Do you like software development for computers? Rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 29,
            question: 'Do you like working with databases? Please rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 30,
            question: 'Do you enjoy developing applications on the cloud? Please rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 31,
            question: 'Do you enjoy programming applications on cross-platforms? Please rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 32,
            question: 'Do you enjoy developing applications based on web services? Please rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 33,
            question:
                'Do you enjoy developing applications for embedded systems, such as device control and sensors? Please rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 34,
            question:
                'Do you enjoy developing applications related to artificial intelligence? Please rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
        {
            id: 35,
            question:
                'Do you like developing applications related to security and information security? Please rate on a scale of 0-10.',
            options: [
                { id: '0', label: '0' },
                { id: '1', label: '1' },
                { id: '2', label: '2' },
                { id: '3', label: '3' },
                { id: '4', label: '4' },
                { id: '5', label: '5' },
                { id: '6', label: '6' },
                { id: '7', label: '7' },
                { id: '8', label: '8' },
                { id: '9', label: '9' },
                { id: '10', label: '10' },
            ],
        },
    ]);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const handleAnswerSelected = (questionId, optionValue) => {
        if (answers[questionId] !== optionValue) {
            setAnswers({ ...answers, [questionId]: optionValue });
            setAnsweredCount(answeredCount + 1);
        } else {
            const newAnswers = { ...answers };
            delete newAnswers[questionId];
            setAnswers(newAnswers);
            setAnsweredCount(answeredCount - 1);
        }
    };

    const handleSubmit = async () => {
        if (answeredCount === questions.length) {
            // submit answers
            try {
                const response = await fetch('https://api-web-flask.onrender.com/submit_answers', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ mssv, answers }),
                });

                if (!response.ok) {
                    throw new Error('Error submitting answers');
                }

                const data = await response.json();

                console.log(data);
            } catch (error) {
                console.error(error);
            }
        } else {
            alert('Please answer all questions');
        }
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const numbersOnly = /^[0-9]*$/; // chỉ cho phép nhập số
        if (inputValue.trim() !== '' && numbersOnly.test(inputValue)) {
            setMssv(inputValue);
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    };

    return (
        <form className={cx('list-question')} onSubmit={handleSubmit}>
            <div className={cx('input_mssv')}>
                <h4>Student ID:</h4>
                <input className={cx('text_mssv')} type="text" name="mssv" onChange={handleInputChange} />
            </div>
            {questions.map((question) => (
                <Question
                    key={question.id}
                    id={question.id}
                    question={question.question}
                    options={question.options}
                    answers={answers} // Thêm biến 'answers' vào props
                    onAnswerSelected={handleAnswerSelected}
                />
            ))}
            <Button type="submit" to="/following" disabled={buttonDisabled}>
                Submit
            </Button>
        </form>
    );
}

function Question(props) {
    const { id, question, options, answers, onAnswerSelected } = props;
    const [isAnswered, setIsAnswered] = useState(false);

    const handleOptionSelected = (optionId, isChecked) => {
        if (isChecked) {
            setIsAnswered(true);
        } else {
            setIsAnswered(false);
        }
        onAnswerSelected(id, optionId);
    };

    return (
        <div className={cx('question')}>
            <h3>{question}</h3>
            {options.map((option) => (
                <Option
                    key={option.id}
                    id={option.id}
                    label={option.label}
                    isChecked={isAnswered && answers[id] === option.id}
                    onOptionSelected={handleOptionSelected}
                />
            ))}
        </div>
    );
}

export default ListQuestion;
