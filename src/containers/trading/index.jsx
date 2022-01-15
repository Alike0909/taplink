import React, { useEffect, useState } from 'react'

// * STYLES
import { Wrapper, Block, Title } from './style'

// * CHARTS 
import Chart from 'react-apexcharts'

export function Trading(props) {

    // * PROPS START

    // * PROPS END

    // * VARIABLES START

    const data = {
        series: [
            60, 40
        ],
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#707bb4', '#5c609f', '#6667ab', '#5a5b9f', '#7d74a8', '#7e6eac'],
            fill: {
                type: 'gradient',
            },
            legend: {
                show: false,
            },
            stroke: {
                width: 1,
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 360
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
        tooltip: {
            enabled: false,
            items: {
                display: 'none'
            }
        }
    }

    // * VARIABLES END

    // * FETCH STARTS

    // async function fetchArea() {
    //     let data = await getDocs(query(collection(db, "area"), orderBy('id', 'asc')))
    //     setAllArea(data.docs)
    // }

    // * FETCH ENDS

    useEffect(() => {
        // fetchArea()
    }, [])

    return (
        <Wrapper className="dashboard">
            <Block className="block">
                <Title>Portfolio</Title>
                <Chart options={data.options} series={data.series} type="donut" width={500} onClick={(event) => console.log(event)}/>
            </Block>
        </Wrapper>
    )
}