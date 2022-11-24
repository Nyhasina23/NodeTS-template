import app from "./config/app";
import environement from "./environement"; 

const PORT = environement.getPort();

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})