import React, { Component } from 'react';

class Calendly extends Component {
    componentDidMount() {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
      head.appendChild(script);
    }
    componentWillUnmount() {
      // whatever you need to cleanup the widgets code
    }
    render(){
      return (
        <div>
          <div id="schedule_form">
            <div 
              className="calendly-inline-widget"
              data-url="https://calendly.com/freshlyfired/15min"
              style={{ minWidth: '320px', height: '580px' }} />
          </div>
        </div>
      );
    }
}

export default Calendly;


// <!-- Calendly Badge-Widget Beginn -->
// <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
// <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
// <script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/freshlyfired/15min', text: 'Zeitplan Zeitfenster', color: '#1d3112', textColor: '#ffffff', branding: true }); }</script>
// <!-- Calendly Badge-Widget Ende -->