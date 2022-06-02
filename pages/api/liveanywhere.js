export default function handler(req, res) {
    if (req.method === 'GET') {
        // Process a GET request
        res.status(200).json({
            status: 'OK',
            message: 'Get Live Anywhere Data Successfully',
            data: [
                {
                    title: 'All House',
                    img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                },
                {
                    title: 'Unique Place',
                    img: 'https://images.unsplash.com/photo-1645645082782-afc5a007f3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
                },
                {
                    title: 'Nature Place',
                    img: 'https://images.unsplash.com/photo-1571177558702-903532738c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
                },
                {
                    title: 'Allow Pet',
                    img: 'https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
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
