/* TODO: test countryNames */
import 'whatwg-fetch';

import { countryDetails } from './country.service';

// Fetch does not send rejected promise even for error states
const jsonResponse = (status, body) => {
  const mockResponse = new Response(
    JSON.stringify(body),
    {
      status,
      headers: {
        'Content-type': 'application/json',
      },
    },
  );

  return Promise.resolve(mockResponse);
};

describe('Country.Service: ', () => {
  beforeEach(() => {
    sinon.stub(window, 'fetch');
  });

  afterEach(() => {
    window.fetch.restore();
  });

  describe('basic sinon functionality', () => {
    beforeEach(() => {
      window.fetch.returns(new Promise(() => { }));
    });

    it('should check for window.fetch call', () => {
      countryDetails('name');
      expect(window.fetch.firstCall.args[0]).toContain('name');
    });
  });

  describe('Successful response', () => {
    beforeEach(() => {
      window.fetch.returns(jsonResponse(200, [{ name: 'Colombia' }]));
    });

    it('should accept successful response', (done) => {
      countryDetails('name')
        .then((json) => {
          expect(json.name).toBe('Colombia');
          done();
        })
        .catch(done);
    });
  });


  describe('Unsuccessful response', () => {
    beforeEach(() => {
      window.fetch.returns(jsonResponse(404, { message: 'Resource Not Found' }));
    });

    it('should accept unsuccessful response', (done) => {
      countryDetails('name')
        .catch(({ status, message }) => {
          expect(status).toBe(404);
          expect(message).toBe('Resource Not Found');
          done();
        });
    });
  });
});
