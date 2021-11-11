import Note from "../../../model/Note"
import dbConnect from "../../../utils/dbConnect"

dbConnect()

export default async (req, res) => {
    const id = req.query.id;
    const method = req.method;

    switch (method) {
        case "GET":
            try {
                const note = await Note.findById(id);

                if (!note) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: note })
            } catch (error) {
                res.status(400).json({ success: false });
            }

            break;

        case "PUT":
            try {
                const note = await Note.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!note) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: note })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case "DELETE":
            try {
                const deleteOne = await Note.deleteOne({ _id: id });

                if (!deleteOne) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true })
            } catch (error) {
                res.status(404).json({ success: false })
            }
            break;
        default:
            break;
    }
}