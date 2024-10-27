import { parseState, stateMap } from './parseState';

export const parseLocation = (location: string) => {
    // eslint-disable-next-line prefer-const, @typescript-eslint/no-unused-vars
    let [city, state, _] = location.split(', ');
    if (state.match(/\d{5}/)) {
      state = parseState(state.split(' ').slice(0, -1).join(' '));
    } else if (Object.keys(stateMap).includes(state)) {
      state = parseState(state);
    }
    return `${city}, ${state}`;
  };