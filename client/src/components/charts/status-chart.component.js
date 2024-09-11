import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { ThemeContext } from '../../Context';

const labels = ['Open', 'In Progress', 'Resolved'];
const backgroundColor = ['gold', 'cornflowerblue', 'darkslategray'];
const options = {
    maintainAspectRatio: false,
    responsive: false,
};

const StatusChart = () => {
    const {theme} = useContext(ThemeContext)
    const [tickets, setTickets] = useState([]);
    const [data, setData] = useState({
        datasets: [{
            data: [0, 0, 0],
            backgroundColor: backgroundColor
        }],
        labels: labels
    });

    useEffect(() => {
        let openCount = 0;
        let progressCount = 0;
        let resolvedCount = 0;

        axios.get('http://localhost:5000/tickets/')
            .then(res => {
                setTickets(res.data);

                res.data.forEach(ticket => {
                    switch (ticket.status) {
                        case 'Open':
                            openCount++;
                            break;
                        case 'In Progress':
                            progressCount++;
                            break;
                        case 'Resolved':
                            resolvedCount++;
                            break;
                        default:
                            break;
                    }
                });

                setData({
                    datasets: [{
                        data: [openCount, progressCount, resolvedCount],
                        backgroundColor: backgroundColor
                    }],
                    labels: labels
                });
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div  className={`${theme}`}>
            <Doughnut
                data={data}
                options={options}
                height={300}
                width={300} />
        </div>
    );
};

export default StatusChart;
