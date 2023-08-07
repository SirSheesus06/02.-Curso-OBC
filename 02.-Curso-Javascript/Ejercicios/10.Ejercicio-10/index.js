// Este es el entrypoint y le importo controller.js

import { suma, multiplica } from './controller.js'

import chalk from 'chalk';

const result = multiplica(suma(1, 2), suma(4, 5));

console.log(chalk.bgGreen(result));