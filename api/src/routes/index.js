import { Router } from 'express';
import axios from "axios";
import { config } from "dotenv";
config();

const router = Router();

router.get("/:location/:page", async (req, res) => {

    const {location, page} = req.params

    try {
        const resp = await axios.get(`${process.env.API_URL}&location=${location}&limit=20${page > 1 ? `&offset=${page*20}` : ""}`, {
            headers: {
                "Authorization": `Bearer ${process.env.API_KEY}`,
            }
        })

        res.json(resp.data)

    } catch (error) {
        console.log(error)
    }
})

export default router;
