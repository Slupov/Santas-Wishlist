import React, {Component} from 'react';

export default class AboutPage extends Component {
    render() {
        return (
            <div id="about-page">
                <h1>PROJECT's GITHUB REPO</h1>
                <div className="github-image">
                    <a src="https://github.com/Slupov/Santas-Wishlist">
                        <img
                            alt="Github cat"
                            src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"
                            onClick={() => window.open(
                                'https://github.com/Slupov/Santas-Wishlist',
                                '_blank'
                            )}
                            onMouseOver={() => {
                                console.log("adada")
                                document.getElementById("about-page").style.cursor = "pointer";
                            }}
                            onMouseLeave={() => {
                                document.getElementById("about-page").style.cursor = "default";
                            }}
                        />
                    </a>
                </div>
            </div>

        );
    }
}