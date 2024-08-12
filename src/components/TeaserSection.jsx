import React from 'react'

function TeaserSection() {
    return (
        <div id='teaser'>
            <div className="relative w-full overflow-hidden" style={{paddingTop:'56.25%'}}>
                <iframe className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/watch?v=qTpyb8lsXf4"
                    title="YouTube video player" frameBorder="0"
        
                    allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default TeaserSection