import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const EditRegistration = () => {
    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const [email, setEmail] = useState("");
    const [pekerjaan, setPekerjaan] = useState("");    
    const {id} = useParams();
    const navigate = useNavigate();    

    const updateRegistration = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/registration/${id}`, {
                nama, alamat, email, pekerjaan
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getRegistrationById();
    },[]);

    const getRegistrationById = async () => {
        const response = await axios.get(`http://localhost:5000/registration/${id}`);
        setNama(response.data.nama);
        setAlamat(response.data.alamat);
        setEmail(response.data.email);
        setPekerjaan(response.data.pekerjaan);        
    };

    const backToHome = async (e) => {
        navigate("/");
    }

    return (     
        <>
        <Helmet>
            <title>Ubah Data Registrasi</title>
        </Helmet>   
        <div className="columns mt-5 is-centered">                    
            <div className="column is-half">
            <div className="title" style={{marginTop:-15}}><center>FORMULIR REGISTRASI</center></div>
                <form onSubmit={updateRegistration}>                                                                
                    <div className="field">
                        <label className="label">Nama Lengkap</label>
                        <div className="control">
                            <input type="text" className="input" value={nama} required onChange={(e)=>setNama(e.target.value)} placeholder="Nama Lengkap" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Alamat Tinggal</label>
                        <div className="control">
                            <textarea className="input" style={{height:80}} value={alamat} required onChange={(e)=>setAlamat(e.target.value)} placeholder="Alamat Tinggal" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input type="text" className="input" value={email} required onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />     
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Pekerjaan</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={pekerjaan} required onChange={(e) => setPekerjaan(e.target.value)}>
                                    <option value="">-- Pekerjaan --</option>
                                    <option value="PNS">PNS</option>
                                    <option value="Pegawai Swasta">Pegawai Swasta</option>
                                    <option value="Wiraswasta">Wiraswasta</option>
                                    <option value="Guru">Guru</option>
                                    <option value="Dosen">Dosen</option>
                                    <option value="Pelajar">Pelajar</option>
                                    <option value="Mahasiswa">Mahasiswa</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>
                        </div>
                    </div>                    
                    <div className="field">
                        <button type="submit" className="button is-success">Perbarui Data</button>&nbsp;
                        <button type="button" className="button is-warning" onClick={backToHome}>Kembali</button>
                    </div>            
                </form>
            </div>
        </div>
        </>
    );
};

export default EditRegistration;