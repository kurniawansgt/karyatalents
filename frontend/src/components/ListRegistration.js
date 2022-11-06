import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const ListRegistration = () => {
    const [Registrations, setRegistration] = useState([]);

    useEffect(() => {
        getRegistrations();
    }, []);

    const getRegistrations = async () => {
        const response = await axios.get("http://localhost:5000/registration");
        setRegistration(response.data);
    };

    const hapusRegistration = async (id) => {
        try {            
            await axios.delete(`http://localhost:5000/registration/${id}`);
            getRegistrations();
        } catch (error) {
            console.log(error);
        }
    };

    return (        
        <>
        <Helmet>
            <title>
                Daftar Registrasi
            </title>
        </Helmet>
        <div className="columns mt-5 is-centered">
            <div className="column is-narrow">
                { /*<Link to={`add`} className="button is-success">
                    Registrasi
                </Link>*/ }
                <div className="title" style={{marginTop:-15}}><center>DAFTAR REGISTRASI</center></div>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <th>No</th>
                        <th>Nama Lengkap</th>
                        <th>Alamat</th>
                        <th>Email</th>
                        <th>Pekerjaan</th>                        
                        <th>Aksi</th>
                    </thead>
                    <tbody>
                        { Registrations.map((registration, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{registration.nama}</td>
                                <td>{registration.alamat}</td>
                                <td>{registration.email}</td>
                                <td>{registration.pekerjaan}</td>                                
                                <td>
                                    <Link to={`/edit/${registration.id}`} className="button is-small is-info">Ubah</Link>&nbsp;
                                    <button onClick={()=> {if(window.confirm('Yakin Akan Hapus Data Ini ?')) {hapusRegistration(registration.id)};}} className="button is-small is-danger">Hapus</button>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default ListRegistration;