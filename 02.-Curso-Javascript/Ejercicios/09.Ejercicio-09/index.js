const logger = require('./logger');

function miAlarma() {
    throw new Error()
}

try {
    miAlarma();
} catch {
    logger.error("Esto es una alerta de ERROR!!!");
}