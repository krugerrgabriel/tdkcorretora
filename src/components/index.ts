
/* eslint-disable */
import Wrapper from './Wrapper'

const windowExists = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    const env = process.env.NODE_ENV.toLowerCase();
    return !env.match(/test/);
  } catch (e) {
    return true;
  }
}

export default (() => {
    let exported

    console.log(windowExists());

    exported = require('./ReactFullpageShell').default

    exported.Wrapper = Wrapper

    return exported
})()