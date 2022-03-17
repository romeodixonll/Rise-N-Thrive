
import classes from './Calendar.module.css';
import Card from '../../../UI/Card';
import React from 'react'
import { gapi } from 'gapi-script';

class Calendar1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }


    getEvents() {
        let that = this;
        let GoogleAuth;
        let SCOPE = ['https://www.googleapis.com/auth/calendar']
        function start() {

            function updateSigninStatus() {
                setSigninStatus();
            }

            function setSigninStatus() {
                var user = GoogleAuth.currentUser.get();
                var isAuthorized = user.hasGrantedScopes(SCOPE);
            }

            gapi.client.init({
                'apiKey': 'AIzaSyD1X8qVjDUrBsfLDCyaZJZotMw5fC6FMZM',
                'clientId': '1011653488775-5jvvodt1ftdu07te5lr75m5jrkogkat0.apps.googleusercontent.com',
                'scope': 'https://www.googleapis.com/auth/calendar',
                'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
            }).then(function () {
                GoogleAuth = gapi.auth2.getAuthInstance();

                // Listen for sign-in state changes.
                GoogleAuth.isSignedIn.listen(updateSigninStatus);
                return gapi.client.request({
                    'path': `https://www.googleapis.com/calendar/v3/calendars/primary/events`,
                })
            }).then((response) => {
                console.log(response)
                let events = response.result.items
                that.setState({
                    events
                }, () => {
                    console.log(that.state.events);
                })
            }, function (reason) {
                console.log(reason);
            });
        }
        gapi.load('client', start)
    }


    componentDidMount = () => {
        this.getEvents()
    }

    render() {
        return <Card className={classes.card}
        // style={theme === "#393939"
        //     ? { backgroundColor: `${textColor}52`, color: 'white' }
        //     : { backgroundColor: `${textColor}99`, color: 'black' }}
        >
            <h1>Calendar</h1>
            <button onClick={this.getEvents}>sign in</button>
        </Card>
    }
}
export default Calendar1