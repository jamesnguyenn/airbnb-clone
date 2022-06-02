export default function handler(req, res) {
    if (req.method === 'GET') {
        // Process a GET request
        res.status(200).json({
            status: 'OK',
            message: 'Get Explore Data Successfully',
            data: [
                {
                    location: 'Ho Chi Minh',
                    distance: '15-minute drive ',
                    img: 'https://cdn.dribbble.com/users/2609693/screenshots/15258786/media/619335222aa818733389adbd9a59412d.png?compress=1&resize=400x300&vertical=top',
                },
                {
                    location: 'Can Tho',
                    distance: '3-hours drive',
                    img: 'https://i.ytimg.com/vi/f1VMK5HOWdM/maxresdefault.jpg',
                },
                {
                    location: 'Nha Trang',
                    distance: '6.5-hours drive ',
                    img: 'https://ak.jogurucdn.com/media/image/p25/place-2017-09-14-7-Vinpearlferryterminaldf184ae28c28fd54807ffe1360dfda5c.jpg',
                },
                {
                    location: 'Phu Quoc',
                    distance: '',
                    img: 'https://ak.jogurucdn.com/media/image/p25/place-2017-09-14-7-Vinpearlferryterminaldf184ae28c28fd54807ffe1360dfda5c.jpg',
                },
                {
                    location: 'Tuy Hoa',
                    distance: '7.5-hours drive ',
                    img: 'https://greenway.com.vn/wp-content/uploads/2020/09/city-transportation-mobility-cartoons_18591-55708.jpg',
                },
                {
                    location: 'Bien Hoa',
                    distance: '45-minute drive ',
                    img: 'https://i.pinimg.com/originals/26/5b/d2/265bd2ea96d71ec45028ac4831cce2fe.jpg',
                },
                {
                    location: 'Thuan An',
                    distance: '30-minute drive ',
                    img: 'https://www.vcbay.news/wp-content/uploads/2020/11/aqw.jpg',
                },
                {
                    location: 'Phan Rang',
                    distance: '5-hours drive ',
                    img: 'https://i.pinimg.com/originals/26/5b/d2/265bd2ea96d71ec45028ac4831cce2fe.jpg',
                },
            ],
        });
    } else {
        res.status(404).json({
            status: 'Failed',
            message: 'Get Explore Not Successfully',
        });
    }
}
