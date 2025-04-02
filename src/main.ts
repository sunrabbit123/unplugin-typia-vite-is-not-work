import { assertHttpLlmApplication } from './important';

assertHttpLlmApplication({
    document: {
        openapi: '3.0',
        info: {
            title: 'Test',
            version: '1.0.0',
        },
    },
});