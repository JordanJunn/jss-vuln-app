import {loadStripe} from '@stripe/stripe-js';

(async () => {
  // setup DOM
  const rootNode = document.getElementById('root');
  const form = document.createElement('form');
  const cardWrapper = document.createElement('div');
  const button = document.createElement('button');
  button.innerText = 'Pay';
  form.appendChild(cardWrapper);
  form.appendChild(button);
  rootNode.appendChild(form);

  const key = 'sk_test_wsFx86XDJWwmE4dMskBgJYrt';
  // setup Stripe.js and Elements
  const stripe = await loadStripe(key);
  const elements = stripe.elements();

  // setup card Element
  const cardElement = elements.create('card', {});
  cardElement.mount(cardWrapper);

  // handle form submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    console.log('[PaymentMethod]', payload);
  });
})();