import React from "react";
import { FormControl } from "react-bootstrap";
import "./index.css";

export default class Task extends React.Component{
    render() {
        return(
           
            <div className="body">
            <div className="container">
                
                    <h1 className="title">My Portofolio</h1> 
                    
                    <h3>Biografi</h3>
                    <p>Halo perkenalkan nama saya Fidya Aimatami. Saat ini saya berstatus sebagai <i>student</i> di Eduwork. Saya berusia 24 tahun dan saat ini bertempat tinggal di Bogor. Keseharian saya adalah membantu usaha orang tua saya dan belajar pemrograman di Eduwork. Latar belakang pendidikan saya adalah pertanian dan pengalaman kerja saya di bidang marketing dan <i>food and baverage</i>. Saya sangat bersemangat mempelajari pemrograman meskipun tidak memiliki latar belakang IT.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3>Skills</h3>
                    <ul>
                        <li>PHP</li>
                        <li>Javascript</li>
                        <li>Golang</li>
                        <li>Python</li>
                        <li>Delphi Embarcadero</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                    <h3>Other Skills</h3>
                    <ol>
                        <li>Node EXpress JS</li>
                        <li>Laravel</li>
                        <li>React JS</li>
                        <li>Mechine Learning</li>
                        <li>Microservices</li>
                    </ol>
                    <h3>My Close Friend</h3>
                    <table border="1px" cellspacing="0">
                        <tr>
                            <td><b>No.</b></td>
                            <td><b>Nama</b></td>
                            <td><b>Adress</b></td>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Dodi Prakoso</td>
                            <td>Sleman</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Bayu Gholam</td>
                            <td>Bogor</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Rahma Andita</td>
                            <td>Yogyakarta</td>
                        </tr>
                    </table>
                    <h3>Contact Me</h3>
                    <form>
                        <table>
                            <tr>
                                <label>Email</label><br/>                          
                                <FormControl type="email" placeholder="email"/><br/>
                                <input type="submit" /><br/>
      
                            </tr>
                            <tr>
                                <label>Message</label><br/>
                                <textarea name="message" rows="5px" cols="21px"></textarea><br/>
                                <input type="submit" />
                            </tr>
                        </table>

                    </form><br/><br/><br/>
                
                    <footer className="footer">Copyright 2020-All right reverse
	                </footer>
            </div>
            </div>
        )
    }
}