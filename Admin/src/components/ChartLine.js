import React, { useEffect, useState } from 'react';
import { DASHBOARD } from 'utils/url';
import { getToken } from 'utils/auth';
import axios from 'axios';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';

export default function ChartLine() {
    const [apiDataNow, setApiDataNow] = useState([]);
    const [apiData, setApiData] = useState([]);
    const Config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    useEffect(() => {
        axios
            .get(DASHBOARD, Config)
            .then((res) => {
                setApiData(res.data.data2021);
                setApiDataNow(res.data.data2022);
            var config = {
                type: 'line',
                data: {
                    labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ],
                    datasets: [
                        {
                            label: new Date().getFullYear(),
                            backgroundColor: '#03a9f4',
                            borderColor: '#03a9f4',
                            data: [res.data.data2022.january, res.data.data2022.february, res.data.data2022.march, res.data.data2022.april, 
                                res.data.data2022.may, res.data.data2022.june, res.data.data2022.july, res.data.data2022.august, res.data.data2022.september, 
                                res.data.data2022.october, res.data.data2022.november, res.data.data2022.december],
                            fill: false,
                        },
                        {
                            label: new Date().getFullYear() - 1,
                            fill: false,
                            backgroundColor: '#ff9800',
                            borderColor: '#ff9800',
                            data: [res.data.data2021.januaryBefore, res.data.data2021.februaryBefore, res.data.data2021.marchBefore, 
                                res.data.data2021.aprilBefore, res.data.data2021.mayBefore, res.data.data2021.juneBefore, res.data.data2021.julyBefore, res.data.data2021.augustBefore,
                                res.data.data2021.septemberBefore, res.data.data2021.octoberBefore, res.data.data2021.novemberBefore, res.data.data2021.decemberBefore],
                        },
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    title: {
                        display: false,
                        text: 'Sales Charts',
                        fontColor: 'white',
                    },
                    legend: {
                        labels: {
                            fontColor: 'black',
                        },
                        align: 'end',
                        position: 'bottom',
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true,
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    fontColor: 'rgba(17,17,17,.7)',
                                },
                                display: true,
                                scaleLabel: {
                                    display: false,
                                    labelString: 'Month',
                                    fontColor: 'white',
                                },
                                gridLines: {
                                    display: false,
                                    borderDash: [2],
                                    borderDashOffset: [2],
                                    color: 'rgba(33, 37, 41, 0.3)',
                                    zeroLineColor: 'rgba(0, 0, 0, 0)',
                                    zeroLineBorderDash: [2],
                                    zeroLineBorderDashOffset: [2],
                                },
                            },
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    fontColor: 'rgba(17,17,17,.7)',
                                },
                                display: true,
                                scaleLabel: {
                                    display: false,
                                    labelString: 'Value',
                                    fontColor: 'white',
                                },
                                gridLines: {
                                    borderDash: [3],
                                    borderDashOffset: [3],
                                    drawBorder: false,
                                    color: 'rgba(17, 17, 17, 0.15)',
                                    zeroLineColor: 'rgba(33, 37, 41, 0)',
                                    zeroLineBorderDash: [2],
                                    zeroLineBorderDashOffset: [2],
                                },
                            },
                        ],
                    },
                },
            };
            var ctx = document.getElementById('line-chart').getContext('2d');
            window.myLine = new Chart(ctx, config);
        })
        .catch((err) => {
            console.log(err);
        }); 
    }, []);

    return (
        <Card>
            <CardHeader color="green" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview
                </h6>
                <h2 className="text-white text-2xl">Pengguna Aplikasi</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                    <canvas id="line-chart"></canvas>
                </div>
            </CardBody>
        </Card>
    );
}
