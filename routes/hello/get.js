import { demoCollection } from "@root/database";

export default async (req, res) => {
    const colection = await demoCollection().get()
    const data = colection.empty ? [] : colection.docs.map(value => value.data())
    res.send(data)
}