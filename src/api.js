import axios from "axios";
import env from "./settings/env";

const BASE_URL = `${env.root}${env.businesses}`;

export const GETALLOFFERS = async page =>
    await axios.get(`${BASE_URL}?epp=12&p=${page}`);
