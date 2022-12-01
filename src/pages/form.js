import * as React from "react"
import {useState} from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
    label,
    input
} from "./form.module.css"


const Form = () => {
    const [name, setName] = useState({})
    const [email, setEmail] = useState({})
    const [cname, setCname] = useState({})

    const [user, setUser] = useState({
        Name: '',
        Email: '',
        CompanyName: '',
        Subject: '',
        Message: ''
    })

    const updateUser = (field, value) => setUser({
            ...user,
            [field]: value
        })
        
    /* const createAirtableRecord = user => {
        return fetch(`https://api.airtable.com/v0/appAaunoiY7PtHEFH/Site`, {
            method: 'POST',
            body: user,
            headers: {
            Authorization: `Bearer keyXYe81GynEeQHgr`,
            'Content-type': `application/json`
            }
        })
        } */

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keyXYe81GynEeQHgr'}).base('appAaunoiY7PtHEFH');
        
        const handleSubmit = (user) =>{
            base('Site').create([
              {
                "fields": {
                    "Name": user.Name,
                    "CompanyName": user.CompanyName,
                    "Email": user.Email,
                    "Subject": user.Subject,
                    "Message": user.Message,
                }
              }
            ], function(err, records) {
              if (err) {
                console.error(err);
                return;
              }
              records.forEach(function (record) {
                console.log(record.getId());
              });
            });
        } 

    return (
        <Layout pageTitle="Form">
            <form>
                <label for='name' className={label}>
                    Name
                    <input className={input} type="text" onChange={e => updateUser('Name', e.target.value)} name="name" id="name"/>
                </label>
                <label for='cname' className={label}>
                    Company Name
                    <input className={input} type="text" onChange={e => updateUser('CompanyName', e.target.value)} name="cname" id="cname"/>
                </label>
                <label for='email' className={label}>
                    Email
                    <input className={input} type="email" onChange={e => updateUser('Email', e.target.value)} name="email" id="email"/>
                </label>
                <label for='subject' className={label}>
                    Subject
                    <select className={input} onChange={e => updateUser('Subject', e.target.value)} name='subject' id='subject'>
                        <option value=''>Choose Subject</option>
                        <option value='Publisher Support'>Publisher Support</option>
                        <option value='Advertiser Support'>Advertiser Support</option>
                    </select>
                </label>
                <label className={label}>
                    Message
                    <textarea className={input} type="text" rows="3" onChange={e => updateUser('Message', e.target.value)} name="message" id="message"/>
                </label>
                
                <button type="submit" onClick={(e)=>{e.preventDefault();console.log(user);handleSubmit(user)}}>Submit</button>
            </form>
            {/* <iframe src="https://airtable.com/embed/shrOyOVVbROH2PtQy?backgroundColor=blue" width="500" height="1555"></iframe> */}
        </Layout>
    )
}

export const Head = () => <Seo title="Form" />

export default Form