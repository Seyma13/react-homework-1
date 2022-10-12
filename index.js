import fetch from "node-fetch";
import axios from "axios";
import getData from "./app.js";



getData(1)  // getData(userId) olan fonk. 1 değerini vererek çalıştırdık.
    .then(data => console.log(data)) // çıktılar.
    .catch(e => console.log(e)) // hata olursa verilecek çıktı