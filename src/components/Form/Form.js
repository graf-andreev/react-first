import React from 'react';

import ServerResponse from "../ServerResponse";
import {useForm} from "react-hook-form";

export default function UserForm() {
    const { register, handleSubmit, errors, formState } = useForm();
    const { isSubmitting } = formState;

    const onSubmit = async (data) => {
        const requestData = {...data};

        const client = new ServerResponse();
        await client.createNewPro(requestData)
            .then(console.log)
    }

    return (
        <>
         <h2 className='form-header'>You can create your pro player here</h2>
        <form className='form-wrapper' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="1">Pro player name</label>
                <input id='1' type="text" name="name" ref={register({required: true})}/>
                {errors.name && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="2">Game</label>
                <select id="2"  ref={register({required: true})} name='game'>
                      <option value="Apex" key="9">Apex</option>
                      <option value="COD WZ" key="3">COD WZ</option>
                </select>
            </div>
            <div>
                <label htmlFor="3">Winrate</label>
                <input id='3' type="number" name="winrate" ref={register({required: true, maxLength: 2})}/>
                {errors.winrate && <span>Max value of percent - 99%</span>}
            </div>
            <div>
                <label htmlFor="4">Status</label>
                <select id="4"  ref={register({required: true})} name='status'>
                    <option value="Online" key="99">Online</option>
                    <option value="Offline" key="33">Offline</option>
                    <option value="Banned" key="34">Banned</option>
                </select>
            </div>
            <div>
                <label htmlFor="5">Photo</label>
                <input id='5' type="text" name="photo" ref={register({required: true, maxLength: 32})}/>
                {errors.winrate && <span>This field is required</span>}
            </div>
            <button className="submit" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Create'}</button>
        </form>
        </>
    );
}