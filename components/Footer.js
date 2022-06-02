import React from 'react';

function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-10 py-14 bg-gray-200">
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
                <h5 className="font-bold">INFORMATION</h5>
                <a className="block">James Information</a>
                <a className="block hover:underline" href="tel:+84902998513">
                    Mobile Number
                </a>
                <a
                    className="block hover:underline"
                    href="mailto:nguyenquangthien151095@gmail.com"
                >
                    Email
                </a>
                <a className="block hover:underline" href="">
                    Ho Chi Minh, Vietnam
                </a>
                <a
                    className="block hover:underline"
                    href="https://drive.google.com/file/d/1rEpOH8L531uMnir1xFJbit50WkNSGTkM/view?usp=sharing"
                >
                    CV
                </a>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <a
                    href="http://james-cv.surge.sh/"
                    className="block hover:underline"
                >
                    Portfolio Website
                </a>
                <a
                    href="https://www.facebook.com/LaoTo95/"
                    className="block hover:underline"
                >
                    Facebook
                </a>
                <a
                    href="https://github.com/jamesnguyenn"
                    className="block hover:underline"
                >
                    Github
                </a>
                <a
                    href="https://www.linkedin.com/in/james-nguyen-8157b8179/"
                    className="block hover:underline"
                >
                    Linkedin
                </a>
                <a
                    href="https://www.hackerrank.com/certificates/5e7f9c83db41"
                    className="block hover:underline "
                >
                    Hacker Rank
                </a>
            </div>
        </div>
    );
}

export default Footer;
