import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';

const backgroundColor = ['aquamarine', 'burlywood', 'firebrick', 'gray'];
const labels = ['Bug/Error', 'Feature Request', 'Security', 'Other'];
const options = {
    maintainAspectRatio: false,
    responsive: false,
};

const TypeChart = () => {
    const [tickets, setTickets] = useState([]);
    const [data, setData] = useState({
        labels: labels,
        datasets: [{
            data: [0, 0, 0, 0],
            backgroundColor: backgroundColor
        }]
    });

    useEffect(() => {
        let bugCount = 0;
        let featureCount = 0;
        let securityCount = 0;
        let otherCount = 0;

        axios.get('http://localhost:5000/tickets/')
            .then(res => {
                setTickets(res.data);

                res.data.forEach(ticket => {
                    if (ticket.status !== 'Resolved') {
                        switch (ticket.type) {
                            case 'Bug/Error':
                                bugCount++;
                                break;
                            case 'Feature Request':
                                featureCount++;
                                break;
                            case 'Security':
                                securityCount++;
                                break;
                            case 'Other':
                                otherCount++;
                                break;
                            default:
                                break;
                        }
                    }
                });

                setData({
                    labels: labels,
                    datasets: [{
                        data: [bugCount, featureCount, securityCount, otherCount],
                        backgroundColor: backgroundColor
                    }]
                });
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Doughnut
                data={data}
                options={options}
                height={300}
                width={350} />
        </div>
    );
};

export default TypeChart;
