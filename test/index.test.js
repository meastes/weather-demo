/*global page:true*/

describe('Weather', () => {
  const Selector = {
    Temperature: '[data-test="temperature"]',
    Conditions: '[data-test="conditions"]',
  };

  const url = 'http://localhost:3000';

  function mockResponse(data) {
    page.on('request', (interceptedRequest) => {
      if (interceptedRequest.url().endsWith('weather/get')) {
        interceptedRequest.respond({
          status: 200,
          contentType: 'application/json; charset=utf-8',
          headers: { 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify(data),
        });
      } else {
        interceptedRequest.continue();
      }
    });
  }

  beforeEach(async () => {
    page.setRequestInterception(true);
  });

  it('should contain the temperature and conditions', async () => {
    mockResponse({ currently: { temperature: 42, summary: 'Sunny' } });
    await page.goto(url);

    await page.waitFor(Selector.Temperature);
    await page.waitFor(Selector.Conditions);

    const temp = await page.$(Selector.Temperature);
    expect(temp).toBeTruthy();

    const conditions = await page.$(Selector.Conditions);
    expect(conditions).toBeTruthy();
  });
});
