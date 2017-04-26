import joi from 'joi';

const envVarsSchema = joi.object({
        LOGGER_LEVEL: joi.string()
            .allow(['error', 'warn', 'info', 'debug', 'verbose'])
            .default('info'),
        LOGGER_ENABLED: joi.boolean()
            .truthy('TRUE')
            .truthy('true')
            .falsy('FALSE')
            .falsy('false')
            .default(true)
    }).unknown()
    .required();

const envVars = joi.validate(process.env, envVarsSchema, function(err, value) {
    if (err) {
        throw new Error('Config validation error: ' + err.message)
    }
    return value;
});

const config = {
    logger: {
        level: envVars.LOGGER_LEVEL,
        enabled: true
    }
};

export default config;