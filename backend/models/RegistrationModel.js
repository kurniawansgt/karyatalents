import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Registration = db.define('registration', {
    nama : DataTypes.STRING,
    alamat : DataTypes.STRING,
    email : DataTypes.STRING,
    pekerjaan : DataTypes.STRING    
},{
    freezeTableName: true
});

export default Registration;

(async() => {await db.sync();})();