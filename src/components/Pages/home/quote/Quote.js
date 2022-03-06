import { useContext, useEffect, useState } from 'react';

import classes from './Quote.module.css';

import Card from '../../../UI/Card';
import useHttp from '../../../utils/API'

import { ColorContext } from '../../../../store/color-context';

const Quote = () => {
    const [textColor] = useContext(ColorContext)
    const [quote, setQuote] = useState({ quote: null, author: null })

    const transformData = (data) => {
        const quoteData = {
            quote: data.contents.quotes[0].quote,
            author: data.contents.quotes[0].author,
        }
        setQuote(quoteData)
    }

    const { isLoading, error, sendRequest: fetchQuote } = useHttp({
        url: `https://quotes.rest/qod?language=en`
    }, transformData)

    useEffect(() => {
        console.log('test')
        fetchQuote()
    }, [])

    return <Card
        className={classes.card}
        style={{ backgroundColor:`${textColor}52`, color:'white' }}
    >
        <h2>{quote.quote}</h2>
        <p>- {quote.author}</p>
    </Card>
};

export default Quote;