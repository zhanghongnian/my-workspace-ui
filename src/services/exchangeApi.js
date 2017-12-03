import { stringify } from 'qs';
import { request } from '../utils/request';

export const getExchangeRateHistoryApi = async () => {
  const resp = await request(`/api/exchange/get_exchange_rate_history`);
  return resp;
}

