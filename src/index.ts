import { ServerConfiguration } from "./configuration";
import { FizzBuzzServer } from "./server";

(async () => {
    try {
        
        const configuration = new ServerConfiguration();
        const server = new FizzBuzzServer(configuration);
        const hapiServer = await server.init();
        
        hapiServer.start();
        console.log('Server Running at: ' + hapiServer.info.uri);
        console.log('Ready to receive requests.');

    } catch (error) {
        console.log('Error starting server: ', error);
    }
})();