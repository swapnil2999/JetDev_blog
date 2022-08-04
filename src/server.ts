import App from "./app";
import Config from "./config/";

const port = Config.APP_PORT;
App.listen(port, () => {
    console.log({
        appTime: new Date().toISOString(),
        message: `App Running on ${port}`
    });
});
