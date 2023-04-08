import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Following() {
    const [data, setData] = useState([]);

    const Semester1 = data.slice(1, 4);
    const Semester2 = data.slice(4, 7);
    const Semester3 = data.slice(7, 10);
    const Semester4 = data.slice(10, 13);
    const Semester5 = data.slice(13, 16);
    const Semester6 = data.slice(16, 19);

    useEffect(() => {
        fetch('https://api-web-flask.onrender.com/get_Learning_Path')
            .then((res) => res.json())
            .then((data) =>
                setData(data.map((item) => item.slice(1, -1).replace(/"/g, '').split(':').splice(1).join(':'))),
            );
    }, []);

    // const data = JSON.parse(learningPath);
    return (
        <div>
            <h1>Learning Path</h1>

            <h3>Email: {data[0]}@student.hcmute.edu.vn</h3>
            {/* <p>{learningPath}</p> */}
            <ul>
                Semester 1
                {Semester1.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <ul>
                Semester 2
                {Semester2.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <ul>
                Semester 3
                {Semester3.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <ul>
                Semester 4
                {Semester4.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <ul>
                Semester 5
                {Semester5.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <ul>
                Semester 6
                {Semester6.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Following;
