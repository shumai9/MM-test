const TickerGetter = require('../TickerGetter')

describe('TickerGetter', function() {
  var tickerGetter

  beforeEach(() => {
    tickerGetter = new TickerGetter()
  });

  it('returns GOOG when passed \'Google Inc\'', done => {
    tickerGetter.getTicker('Google Inc').then(company => {
      expect(company.tickerCode).toEqual('GOOG')
      done()
    })
    .catch((err) => console.log(err))
  }, 2500);

  it('returns MSFT when passed \'Microsoft Inc\'', done => {
    tickerGetter.getTicker('Microsoft Inc').then(company => {
      expect(company.tickerCode).toEqual('MSFT')
      done()
    })
    .catch((err) => console.log(err))
  }, 2500);

  it('also returns correct tickers when passed a partial name', done => {
    tickerGetter.getTicker('google').then(company => {
      expect(company.tickerCode).toEqual('GOOG')
      done()
    })
    .catch((err) => console.log(err))
  }, 2500)
})
