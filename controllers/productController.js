




export const getProducts = (req, res) => {
    console.log(req.query);
    console.log(req.body);
    return res.status(200).json({data: 'all products'});

}