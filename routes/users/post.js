import { userCollection } from "@root/database";
export default async (req, res) => {
    const { permission } = req.user || {}
    if (permission !== 12) {
        // res.sendStatus(403)
    }
    const { fullName, birthDay, contract = [], id, password, email } = req.body
    const checkReq = await checkExitUsers(id, email)
    if (!checkReq) {
        return res.send({ message: 'Tài khoản này đã tồn tại'})
    }
    await userCollection().doc(id).set({
        fullName,
        birthDay,
        id,
        contract,
        password,
        email
    })
    res.send({ message: 'Đã tạo tài khoản thành công' })
}
const checkExitUsers = async (id, email) => {
    let check = (await userCollection().where('id', '==', id).get()).empty
    if (!check) return false
    return (await userCollection().where('email', '==', email).get()).empty
}