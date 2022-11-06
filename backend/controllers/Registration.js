import Registration from "../models/RegistrationModel.js";

export const getDataAll = async(req, res) => {
    try {
        const response = await Registration.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDataById = async(req, res) => {
    try {
        const response = await Registration.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createRegistration = async(req, res) => {
    try {
        await Registration.create(req.body)
        res.status(201).json({msg:"Data Berhasil Tersimpan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateRegistration = async(req, res) => {
    try {
        await Registration.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Data Berhasil Diperbarui"});
    } catch (error) {
        console.log(error.message);
    }
}

export const hapusData = async(req, res) => {
    try {
        await Registration.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Data Berhasil Terhapus"});
    } catch (error) {
        console.log(error.message);
    }
}