import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


//Axios, useEffect Context API, usereducer, REDUX
const Esineet = (props) => {
    const [data, setData] = useState(["Dataa haetaan"])
    const [dataNoudettu, setDataNoudettu] = useState(false)
    const [valittuPaikkakunta, setValittuPaikkakunta] = useState("")
    const [hakusana, setHakusana] = useState("")

    useEffect(async () => {
        let result = await axios('https://api.huuto.net/1.1/categories/' + props.id + '/items?area=' + valittuPaikkakunta + '&words=' + hakusana)
        setData(JSON.parse(result.request.response).items);
        setDataNoudettu(true);

    }, [props.id, valittuPaikkakunta, hakusana])

    const paikkakuntaMuutetaan = (event) => {
        setValittuPaikkakunta(event.target.value)
    }
    const hakusanaMuutetaan = (event) => {
        setHakusana(event.target.value)
    }

    return (<div>
        <hr />
        <pre>
            Hakusana:                   <input onChange={(event) => hakusanaMuutetaan(event)}></input><br />
            Paikkakunta/postinumero:    <input onChange={(event) => paikkakuntaMuutetaan(event)}></input>
        </pre>
        <hr />

        {!dataNoudettu ? "Odotetaan dataa..." : data.map(alkio => <div>{alkio.title + " Paikassa:" + alkio.location}</div>)}

    </div>)

}

export default Esineet