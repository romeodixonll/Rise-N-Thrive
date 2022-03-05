import { useEffect, useState } from 'react';

import classes from './News.module.css'
import arrowBlack from '../../../../assets/images/arrow-black.png'
import arrowWhite from '../../../../assets/images/arrow-white.png'

import Card from '../../../UI/Card';
import useHttp from '../../../utils/API';

const News = () => {
    const [currentNewsData, setCurrentNewsData] = useState({title:null, image:null, image_caption:null,abstract:null,link:null,date:null})
    let pulledData = [];
    let currentIndex = 0;
    let APIKEY = 'AtuvVAhSUt6GVa3mX58pn9tpVhjsAzpF'

    const transformData = (data) => {
        for (let i = 0; i < 5; i++) {
            pulledData.push({
                title: data.results[i].title,
                image: data.results[i].multimedia[0].url,
                image_caption: data.results[i].multimedia[0].caption,
                abstract: data.results[i].abstract,
                link: data.results[i].url,
                date: Date.now(),
            })
        }
        // console.log(pulledData)
        setCurrentNewsData(pulledData[0])
    }

    const { isLoading, error, sendRequest: fetchNews } = useHttp({ url: `https://api.nytimes.com/svc/topstories/v2//home.json?api-key=${APIKEY}` }, transformData)

    useEffect(() => {
        fetchNews()
    }, [])

    const toggleNewsHandler = (direction) => {
        direction === 'next' ? currentIndex++ : currentIndex--;
        if (currentIndex == 5) {
            currentIndex = 0
        }
        if (currentIndex == -1) {
            currentIndex = 4
        }
        console.log(pulledData)
        console.log(currentIndex)
        console.log(pulledData[currentIndex])
        // setCurrentNewsData(pulledData[currentIndex])
    }

    return (
        <Card className={classes.card} style={{ backgroundColor: '#292929', color: 'white' }}>
            <div className={classes.newsContent}>
                <h2>Whats new today...</h2>
                <div>
                    <h3>{currentNewsData.title}</h3>
                    <div className={classes.toggleNewsDiv}>
                        <img src={arrowWhite} onClick={() => toggleNewsHandler('back')}/>
                        <img src={currentNewsData.image} />
                        <img src={arrowWhite} onClick={() => toggleNewsHandler('next')}/>
                    </div>
                    <h4>{currentNewsData.abstract}</h4>
                </div>
            </div>
            <div className={classes.newsData}>
                <a href={currentNewsData.link} target='_blank'>Visit article</a>
                <h5>last loaded: <br />03/05/2022 at 1:48PM</h5>
            </div>
        </Card>
    )
}

export default News