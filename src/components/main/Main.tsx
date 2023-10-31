import './Main.css'

export default function Main() {

    const imageData = [
        {
            "name": "DEEP EARTH",
            "desktop": "images/desktop/image-deep-earth.jpg",
            "mobile": "images/mobile/image-deep-earth.jpg"
        },
        {
            "name": "NIGHT ARCADE",
            "desktop": "images/desktop/image-night-arcade.jpg",
            "mobile": "images/mobile/image-night-arcade.jpg"
        },
        {
            "name": "SOCCER TEAM VR",
            "desktop": "images/desktop/image-soccer-team.jpg",
            "mobile": "images/mobile/image-soccer-team.jpg",
        },
        {
            "name": "THE GRID",
            "desktop": "images/desktop/image-grid.jpg",
            "mobile": "images/mobile/image-grid.jpg"
        },
        {
            "name": "FROM UP ABOVE VR",
            "desktop": "images/desktop/image-from-above.jpg",
            "mobile": "images/mobile/image-from-above.jpg"
        },
        {
            "name": "POCKET BOREALIS",
            "desktop": "images/desktop/image-pocket-borealis.jpg",
            "mobile": "images/mobile/image-pocket-borealis.jpg"
        },
        {
            "name": "THE CURIOSITY",
            "desktop": "images/desktop/image-curiosity.jpg",
            "mobile": "images/mobile/image-curiosity.jpg"
        },
        {
            "name": "MAKE IT FISHEYE",
            "desktop": "images/desktop/image-fisheye.jpg",
            "mobile": "images/mobile/image-fisheye.jpg"
        }

    ]


    return <main>
        <div className='main-container-div'>
            <div className="interactive-card">
                <div>
                    <img src="images/desktop/image-interactive.jpg" alt="interactive" />
                </div>
                <div>
                    <h2>THE LEADER IN INTERACTIVE VR</h2>
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some fo the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                </div>
            </div>
            <div className='creations-container'>

                <h2>OUR CREATIONS</h2>
                <button>SEE ALL</button>
                
                <div className="image-grid">
                    {imageData.map((image) =>
                        <div className='image-div'>
                            <img className='desktop-image' src={`${image.desktop}`} alt={`${image.name}`} />
                            <img className='mobile-image' src={`${image.mobile}`} alt={`${image.name}`} />
                            <div className='image-name'>
                                <p>{image.name}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>

    </main>
}