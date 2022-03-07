import { useContext } from 'react';

import classes from './Calendar.module.css';

import Card from '../../../UI/Card';

import { ColorContext } from '../../../../store/color-context';

const Calendar = () => {
    const [textColor] = useContext(ColorContext)


 // Client ID and API key from the Developer Console
 var CLIENT_ID = '307230831850-judptq0s50lmj324rpo2o7a4q7lmtltf.apps.googleusercontent.com';
 var API_KEY = 'AIzaSyDyehbOecnliBj4p7e7CiNLtodqbg48uhQ';
 
 // Array of API discovery doc URLs for APIs used by the quickstart
 var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
 
 // Authorization scopes required by the API; multiple scopes can be
 // included, separated by spaces.
 var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
 
 var gapi = window.gapi
 
 
const Authorize = () => {
     gapi.load('client:auth2', () => {
         console.log('loaded client')
 
         gapi.client.init({
             apiKey: API_KEY,
             clientId: CLIENT_ID,
             discoveryDocs: DISCOVERY_DOCS,
             scope: SCOPES,
         })
 
         gapi.client.load('calendar', 'v3', ()=> console.log('bam'))
 
         gapi.auth2.getAuthInstance().signIn()
         
     })
 }

    return <Card className={classes.card} style={{backgroundColor: `${textColor}52`}}>
        <h1 onClick={Authorize}>Calendar</h1>
    </Card>
}

export default Calendar