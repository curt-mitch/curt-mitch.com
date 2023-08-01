import Script from 'next/script'

const SimpleAnalyticsScript = () => {
  return (
    <>
      <Script strategy="lazyOnload" id="sa-script">
        {`
            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};
        `}
      </Script>
      <Script
        async
        defer
        strategy="lazyOnload"
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  )
}

// https://docs.simpleanalytics.com/events
export const logEvent = (eventName, callback) => {
  if (callback) {
    // @ts-ignore
    return window.sa_event?.(eventName, callback)
  } else {
    // @ts-ignore
    return window.sa_event?.(eventName)
  }
}

export default SimpleAnalyticsScript
