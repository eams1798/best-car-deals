import { parseState, stateMap } from './parseState';

export const parseLocation = (location: string) => {
  /* Attleboro, MA 02703, USA */
    // eslint-disable-next-line prefer-const, @typescript-eslint/no-unused-vars
    let [city, state, _] = location.split(', ');
    
    if (state.match(/\d{5}/)) {
      state = state.split(' ')[0]
    } else if (Object.keys(stateMap).includes(state)) {
      state = parseState(state);
    }
    return `${city}, ${state}`;
  };