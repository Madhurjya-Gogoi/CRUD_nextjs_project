import Note from "../../model/Note";
import dbConnect from "../../utils/dbConnect";
dbConnect();


export default async (req, res) => {
    const email = req.query.email;
    const method = req.method;
    console.log(email)
    switch (method) {
        case "GET":
            try {
                const note = await Note.find({});
                if (!note) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: note })
            } catch (error) {
                res.status(400).json({ success: false });
            }

            break;
        default : break;
    }
}