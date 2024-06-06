import { tailwind } from '@utima/eslint-config/configs';

import baseConfig from '../../eslint.config.mjs';

export default [...baseConfig, ...tailwind];
