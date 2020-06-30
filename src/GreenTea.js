import React from 'react';
import LearnAboutTea from './LearnAboutTea';
import { Link } from 'react-router-dom';

const GreenTea = () => {


    return (
        <div className='container-about'>
            <div className="learn_title-box">
                    <h2 id='green'>Zielona herbata</h2>
            </div>
            <div className='about-box'>
                <p className='about-para'>
                    Herbaty zielone charakteryzuje najkrótszy ze wszystkich gatunków czas oksydacji (czyli utlenienia liści), 
                    który zostaje zatrzymany dzięki szybkiej obróbce cieplnej – w przypadku herbat chińskich listki są podgrzewane 
                    w specjalnych piecach lub tradycyjnie na wokach, w Japonii natomiast używa się do tego celu pary wodnej. 
                    Proces ten ma znaczny wpływ na smak naparu, dlatego herbaty z różnych regionów mocno różnią się od siebie. 
                    W chińskich herbatach zielonych częściej dominują nuty trawiaste, kwiatowe i orzechowe, zaś specyficzną cechą 
                    herbat Kraju Kwitnącej Wiśni jest piąty smak – umami. 
                    <br/>
                    <br/>
                    <div className='learn_brewing-tips-box'>
                        <span className='learn_brewing-tips'>
                            Zalecana temteratura parzenia:
                        </span>
                        <br/>
                             herbaty chińskie: ok. 75*C
                        <br/>
                             herbaty japońskie: ok. 60*C 
                    </div>
                </p>
            </div>
            <Link to='/green'>
                <div className='about-btn tea_btn-goBack teaString_btn tea_btn'></div>
            </Link>
        </div>
    )
}


export default GreenTea;