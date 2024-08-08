import React from 'react'

function TeaserSection() {
    return (
        <div id='teaser'>
            <div className="relative w-full overflow-hidden" style={{paddingTop:'56.25%'}}>
                <iframe className="absolute top-0 left-0 w-full h-full"
                    src="https://fb.watch/tQfub8QlaK/"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default TeaserSection