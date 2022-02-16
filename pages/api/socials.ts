import {socials} from "./data/socials";
import {NextApiRequest} from "next";
import {NextApiResponse} from "next";


export default function handler(req:NextApiRequest, res:NextApiResponse) {
    switch (req.method) {
        case 'GET':
            res.status(200).json(socials);
        default:
            break;
    }
    res.end()


}
