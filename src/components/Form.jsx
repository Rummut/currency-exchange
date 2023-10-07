import { fetchCurrencyExchange } from 'API/api';

export const Form = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.currency;
    const [amount, from, , to] = value.split(' ');
    fetchCurrencyExchange({ amount, from, to });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="15 USD in UAH" name="currency" />
      <button type="submit">Exchange</button>
    </form>
  );
};
