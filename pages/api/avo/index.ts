import Database from "@database";
import { IncomingMessage, ServerResponse } from "http";

const allAvos =async (request:IncomingMessage, response:ServerResponse) => {
    const db = new Database();
    const allEntries = await db.getAll();
    const count = allEntries.length;

    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify({data: allEntries, count}));
};

export default allAvos;