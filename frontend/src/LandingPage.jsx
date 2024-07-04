import React from "react";

const LandingPage = () => {
    const gifUrl = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmR0ZWtrY3U0Mzk5M2dxcmVyOGNlN3ppczZuc2ZsNjNleDcydDdrayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VekcnHOwOI5So/giphy.webp';

    return (
        <div className="landing">
            <img src={gifUrl} alt="Cat Gif" />
        </div>
    );
};

export default LandingPage;