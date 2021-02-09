import { get } from './https';
import config from '../config/index';
import { Toast } from '../components/atom/Toast';
import { IActivityRequest, IActivityResponse } from '../model/IBore';

export const getRandomEvent = async (
  request?: IActivityRequest | undefined,
): Promise<IActivityResponse | undefined> => {
  try {
    const data = await get({
      url: `${config.boreBaseUrl}/activity`,
      ...(request ? {} : { pathParameter: request }),
    });
    Toast.success(`Successfully received an activity`);
    return data;
  } catch {
    Toast.error(`Unable to receive an activity`);
    return undefined;
  }
};
