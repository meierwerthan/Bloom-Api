//BLOOMTIME DESIGN 2019
const stripe = require('../constants/stripe'); //Get stripe API

const paymentApi = app => { //Access the back-end
  app.get('/ping', function (req, res) {
    return res.send('pong');
   });
   
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app.post('/', async (req, res) => { //Post the charge
    try{
      let { status } = await stripe.charges.create({
        amount: req.body.amount,
        currency: "usd",
        description: "Charge",
        source: req.body.token
        });
      res.json( { status } );
  }catch(err) {
    console.log(err)
    res.status(500).end();
    }
  });
  return app;
};

module.exports = paymentApi;