import React from 'react'

function TeaserSection() {
    return (
        <div id='teaser'>
            <div className="relative w-full overflow-hidden" style={{paddingTop:'56.25%'}}>
                <iframe className="absolute top-0 left-0 w-full h-full"
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flegazpicitytourismoffice%2Fposts%2Fpfbid031c95gb5fdMk4s15kCqtvmq9hFLT9XK7DtWghebysu1UZpnz7RNTAx4DktHrt91Wl&show_text=true&width=500" width="500" height="720" 
                    style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
            </div>
        </div>
    )
}

export default TeaserSection