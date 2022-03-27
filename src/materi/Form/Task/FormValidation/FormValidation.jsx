import React from "react";
const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label>
            {label}: </label>
            <br/>
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return(
        <ul style={{color:'red', marginLeft:'-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}
class FormValidation extends React.Component {
    state= {
        email: '',
        password: '',
        fullname: '',
        tempatlahir: '',
        tanggallahir: '',

        errors: []
    }
    handleSubmit= (event) => {
        event.preventDefault();
        const {email, password, fullname, tempatlahir, tanggallahir,jeniskelamin}= this.state;

        let message=[];
        if(fullname.length === 0){
            message = [...message, 'Nama tidak boleh kosong'];
        }
        if(tempatlahir.length === 0){
            message = [...message, 'Tempat lahir tidak boleh kosong'];
        }
        if(tanggallahir.length === 0){
            message = [...message, 'tanggal lahir harus diisi'];
        }
        if(jeniskelamin.length === 0){
            message = [...message, 'jenis kelamin harus dipilih'];
        }
        if(email.length === 0){
        message = [...message, 'Email tidak boleh kosong'];
        }
        if(password.length === 0){
        message = [...message, 'Password tidak boleh kosong'];
            }
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!re.test(String(email).toLowerCase())){
                message = [...message,'Email tidak valid'];
            }
            if (password.length < 8){
                message= [...message,'Password terlalu pendek'];
            }
        if (message.length > 0){
            this.setState({errors: message});
        }
        else{
            alert(`
            nama: ${this.state.fullname}
            tempatlahir: ${this.state.tempatlahir}
            tanggallahir: ${this.state.tanggallahir}
            jeniskelamin: ${this.state.jeniskelamin}
            email: ${this.state.email}
            `);
        this.setState({
            errors: []
        })
        }
    }
render () {

    

    const style = {
        width: '400px',
        margin: '100px auto 0',
        border: '1px solid black',
        padding: '10px'
    }
    return(
        <div style={style}>
            {
                this.state.errors && <ShowErrors errors={this.state.errors}/>
            }
            <h4>Sig in page</h4>
            <form onSubmit={this.handleSubmit} >
                <Input type="text" name="fullname" label="Fullname" onChange={value => this.setState({fullname: value})} />
                <Input type="text" name="tempatlahir" label="Tempat Lahir" onChange={value => this.setState({tempatlahir: value})} />
                <Input type="date" name="tanggallahir" label="Tanggal Lahir" onChange={value => this.setState({tanggallahir: value})} />
                <select name="jeniskelamin" label="Jenis Kelamin" onChange={value => this.setState({jeniskelamin: value})}>
                <option name="pilihjeniskelamin" label="Pilih jenis kelamin" onChange={value => this.setState({jeniskelamin: value})}>Pilih jenis kelamin</option>
                <option name="pria" label="pria" onChange={value => this.setState({jeniskelamin: value})}>pria</option>
                <option name="wanita" label="wanita" onChange={value => this.setState({jeniskelamin: value})}>wanita</option>
                </select>
                <Input type="email" name="email" label="Email" onChange={value => this.setState({email: value})} />
                <Input type="password" name="password" label="Password" onChange={value => this.setState({password: value})} />
                
                <br />
                <button type="submit">Sig In..</button>
            </form>
        </div>
    )
}
}

export default FormValidation;