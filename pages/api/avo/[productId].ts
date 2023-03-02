import { NextApiRequest, NextApiResponse} from "next";
import Database from "@database";

const allAvos =async (request:NextApiRequest, response:NextApiResponse) => {
    const db = new Database();
    const id = request.query.productId
    const entry = await db.getById(id as string);

    //response.statusCode = 200;
    //response.setHeader('Content-type', 'application/json');
    //response.end(JSON.stringify(entry));

    //Con esta linea resumimos las tres lineas de arriba
    response.status(200).json(entry)
};

export default allAvos;