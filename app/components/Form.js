'use client'
import localFont from 'next/font/local'
import React, { Component } from 'react'

// const myFont = localFont({ src: 'Inter-Black.woff2' })

class Forms extends Component {
    constructor(props){
        super(props)
        this.state = {
            reg_no: '',
            name: '',
            branch: '',
            year_of_study: '',
            section: '',
            batch: '',
            type_of_participation: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(data)
    }
    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
    return (
        <form className="px-4 py-2 flex flex-col justify-center items-center bg-slate-400 w-1/2 m-auto rounded-xl" onSubmit={this.handleSubmit} method="post">
            <div className="flex items-center justify-center">
                <label htmlFor="reg_no" className="">Reg. No.</label>
                <input className="w-40 rounded-sm" name="reg_no" type="text" required minLength="10" maxLength="20" onChange={this.handleInputChange}></input>
            </div>
            <div className="flex items-center justify-center">
                <label htmlFor="name" className="">Name</label>
                <input className="w-40 rounded-sm" name="name" type="text" placeholder="" required minLength="10" maxLength="20" onChange={this.handleInputChange}></input>
            </div>
            <div className="flex items-center justify-center">
                <label htmlFor='branch'>Branch</label>
                <select name='branch' required defaultValue={"default"}  onChange={this.handleInputChange}>
                    <option value="default" disabled>Select</option>
                    <option>CSE</option>
                    <option>CSE_AIML</option>
                </select>
            </div>
            <div className="flex items-center justify-center">
                <label htmlFor='year_of_study'>Year of Study</label>
                <select name='year_of_study' required defaultValue={"default"} onChange={this.handleInputChange}>
                    <option value="default" disabled>Select</option>
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
            <div className="flex items-center justify-center">
                <label htmlFor='section'>Section</label>
                <select name='section' required defaultValue={"default"} onChange={this.handleInputChange}>
                    <option value="default" disabled>Select</option>
                    <option>A</option>
                    <option>B</option>
                    <option>N.A</option>
                </select>
            </div>
            <div className="flex items-center justify-center">
                <label htmlFor='batch'>Batch</label>
                <select name='batch' required defaultValue={"default"} onChange={this.handleInputChange}>
                    <option value="default" disabled>Select</option>
                    <option>2021-2025</option>
                    <option>2022-2026</option>
                </select>
            </div>
            <div className="flex items-center justify-center">
                <label htmlFor='type_of_participation'>Type of participation</label>
                <select name='type_of_participation' required defaultValue={"default"} onChange={this.handleInputChange}>
                    <option value="default" disabled>Select</option>
                    <option>FDP</option>
                    <option>Workshop</option>
                    <option>Internship</option>
                    <option>Online Course</option>
                    <option>Conference</option>
                    <option>Hackathon</option>
                </select>
            </div>

            <button className="bg-slate-600 py-1 my-4 w-20 text-white rounded-xl" type="submit">Submit</button>
        </form>
    )
    }
}

export default Forms