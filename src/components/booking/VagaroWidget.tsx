import React, { useEffect, useRef } from 'react';

const VagaroWidget: React.FC = () => {
  const hasInjected = useRef(false);

  useEffect(() => {
    // Only inject once
    if (hasInjected.current) return;
    hasInjected.current = true;

    // Create a container outside of React's control
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'vagaro-booking-widget';
    widgetContainer.style.width = '100%';
    widgetContainer.style.maxWidth = '800px';
    widgetContainer.style.margin = '0 auto';

    // Set the exact HTML that works
    widgetContainer.innerHTML = `<div id='frameTitle' class='embedded-widget-title' style='font-size: 23px; color: #333;font-family:Arial, Helvetica, sans-serif; line-height:24px; padding: 18px 10px 8px; text-align: center; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;'>Book Now</div><div class="vagaro" style="width:250px; padding:0; border:0; margin:0 auto; text-align:center;"><style>.vagaro a {font-size:14px; color:#AAA; text-decoration:none;}</style><a href="https://www.vagaro.com/en-gb/pro/">Powered by Vagaro</a>&nbsp;<a href="https://www.vagaro.com/en-gb/pro/salon-software">Salon Software</a>,&nbsp;<a href="https://www.vagaro.com/en-gb/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;<a href="https://www.vagaro.com/en-gb/pro/fitness-software">Fitness Software</a><script type="text/javascript" src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqoCZ0nEJOcT3qmV35y79oz34mC2PeFJ4mC30m9cyUeJUtjP0dDxkJEvwRapWUep2sERAJDXwOapcUbfY?v=loBDWG4BYCkF4xzcQSEIv1krqOQHlzDJmWdoSoyHDwiW#"></script></div>`;

    // Find the mount point and append
    const mountPoint = document.getElementById('vagaro-widget-mount');
    if (mountPoint) {
      mountPoint.appendChild(widgetContainer);
    }

    // No cleanup - let the widget stay in DOM
  }, []);

  return (
    <div
      id="vagaro-widget-mount"
      style={{
        minHeight: '500px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
    />
  );
};

export default VagaroWidget;