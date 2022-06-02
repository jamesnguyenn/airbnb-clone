import React from 'react';

function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-200">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">TECHNOLOGIES</h5>
                <p>NextJS</p>
                <p>Tailwind Css</p>
                <p>Redux</p>
                <p>API</p>
                <p>SSG</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>James Information</p>
                <p>Mobile Number</p>
                <p>Email</p>
                <p>Address</p>
                <p>CV</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Portfolio Website</p>
                <p>Facebook</p>
                <p>Github</p>
                <p>Linkedin</p>
                <p>Hacker Rank</p>
            </div>
        </div>
    );
}

export default Footer;
