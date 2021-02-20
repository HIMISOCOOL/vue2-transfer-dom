export const ErrorLogger = (directiveName: string) => (message: string) => {
    console.error(`v-${directiveName}: ${message}`);
};
