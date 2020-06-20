import React from 'react';

const LearnAboutTea = () => {

    return (
        <div className='container learn'>
            {/* <div className='learn_menu-box'>
            <ul className='learn_menu'>
                <a className='learn_menu-link' href="#white"><li >Biała herbata</li></a>
                <a className='learn_menu-link' href="#green"><li>Zielona herbata</li></a>
                <a className='learn_menu-link' href="#black"><li>Czarna herbata</li></a>
                <a className='learn_menu-link' href="#yellow"><li>Żółta herbata</li></a>
                <a className='learn_menu-link' href="#oolong"><li>Herbata oolong</li></a>
                <a className='learn_menu-link' href="#pu-erh"><li>Herbata Pu-erh</li></a>
            </ul>
            </div>
            <br/> */}

            <div className='learnAbout'>
                <div className="learn_title-box">
                    <h2 id='green'>Zielona herbata</h2>
                </div>
                <p>
                    Herbaty zielone charakteryzuje najkrótszy ze wszystkich gatunków czas oksydacji (czyli utlenienia liści), 
                    który zostaje zatrzymany dzięki szybkiej obróbce cieplnej – w przypadku herbat chińskich listki są podgrzewane 
                    w specjalnych piecach lub tradycyjnie na wokach, w Japonii natomiast używa się do tego celu pary wodnej. 
                    Proces ten ma znaczny wpływ na smak naparu, dlatego herbaty z różnych regionów mocno różnią się od siebie. 
                    W chińskich herbatach zielonych częściej dominują nuty trawiaste, kwiatowe i orzechowe, zaś specyficzną cechą 
                    herbat Kraju Kwitnącej Wiśni jest piąty smak – umami. 
                    <br/>
                    <br/>
                    <span className='learn_brewing-tips'>
                        Zalecana temteratura parzenia:
                    </span>
                    <br/>
                        - herbaty chińskie: ok. 75*C
                    <br/>
                        - herbaty japońskie: ok. 60*C 
                </p>
            </div>
            <div className='learnAbout'>
                <div className="learn_title-box">
                    <h2 id='white'>Biała herbata</h2>
                </div>
                <p>
                    Najprawdopodobniej pierwszy wytwarzany przez człowieka gatunek herbaty, przygotowywany z młodych, lekko utlenionych 
                    liści lub pączków. Napar białej herbaty jest przejrzysty a w smaku delikatnie słodki, z subtelnym ziołowym posmakiem.
                    <br/>
                    <br/>
                    <span className='learn_brewing-tips'>
                        Zalecana temteratura parzenia: 
                    </span>
                    ok. 90*C
                </p>
            </div>
            <div className='learnAbout'>
                <div className="learn_title-box">
                    <h2 id='black'>Czarna herbata</h2>
                </div>
                <p>
                    Wciąż najbardziej popularny na Zachodzie gatunek herbaty, wytwarzany między innymi w Chinach, 
                    Indiach, Nepalu, Gruzji, na Cejlonie, a także w krajach Bliskiego Wschodu i Środkowej Afryki. 
                    W wyniku procesu wysokiego utlenienia liście zyskują swój charakterystyczny ciemny kolor, któremu 
                    zawdzięczają nazwę stosowaną powszechnie w naszym kręgu kulturowym. Warto jednak wiedzieć, że w tradycji 
                    chińskiej ten typ herbaty określany jest mianem czerwonej, zaś jako czarną bądź ciemną określa się herbatę 
                    fermentowaną typu pu-erh lub hei cha.
                    <br/>
                    <br/>
                    <span className='learn_brewing-tips'>
                        Zalecana temteratura parzenia: 
                    </span>
                    100*C 
                </p>
            </div>
            <div className='learnAbout'>
                <div className="learn_title-box">
                    <h2 id='yellow'>Żółta herbata</h2>
                </div>
                <p>
                    To najrzadszy rodzaj herbaty, wytwarzany w niewielkich ilościach wyłącznie w Chinach. 
                    Zgodnie z podaniami przez setki lat zarezerwowany był wyłącznie dla ust samego cesarza. 
                    Obróbka tego gatunku herbaty różni się od zielonych dodaniem jednego kroku – procesu żółknięcia liści, 
                    odbywającego się pod przykryciem w odpowiednio wilgotnych i ciepłych warunkach, dzięki czemu zachodzi 
                    oksydacja nieenzymatyczna. Żółta herbata zyskuje w tym procesie swój świeży, wytrawny i nieco warzywny smak. 
                    <br/>
                    <br/>
                    <span className='learn_brewing-tips'>
                        Zalecana temteratura parzenia:
                    </span>    
                    ok. 80*C            
                </p>
            </div>
            <div className='learnAbout'>
                <div className="learn_title-box">
                    <h2 id='oolong'>Herbata Oolong</h2>
                </div>
                <p>
                    Stopień oksydacji, oolongów, nazywanych też herbatą turkusową, może wynosić od 10% do 80%, co skutkuje niezwykłą 
                    różnorodnością w obrębie tego gatunku. Liście mniej utlenionych, jasnych oolongów są najczęściej zwinięte w formie kuleczek, 
                    które w trakcie parzenia rozwijają się w piękne, niemal nienaruszone liście. Herbaty tego typu charakteryzują się delikatnym, 
                    słodkim smakiem i aromatem, który może przywodzić na myśl kwiaty, miód, a nawet śmietankę. Liście wyżej oksydowanych, ciemnych 
                    oolongów mają najczęściej kształt igiełek lub spiralek, zaś w smaku bliżej im do herbat czarnych, choć są od nich lżejsze, 
                    a w ich aromacie wyczuwalne są nuty orzechowe, drzewne, słodowe i mineralne. Ze względu na wyjątkowe walory smakowe i wymagający 
                    wielkiego doświadczenia proces obróbki liści, niektóre oolongi były zarezerwowane wyłącznie dla chińskiego dworu cesarskiego. 
                    <br/>
                    <br/>
                    <span className='learn_brewing-tips'>
                        Zalecana temteratura parzenia:
                    </span>
                        <br/>
                        - nisko oksydowane oolongi: 85-95*C
                        <br/>
                        - wysoko oksydowane oolongi: ok. 85*C
                </p>
            </div>
            <div className='learnAbout'>
                <div className="learn_title-box">
                    <h2 id='pu-erh'>Herbata Pu-erh</h2>
                </div>
                <p>
                    Pu-erh (w Polsce często nazywana herbatą czerwoną) to rodzaj dojrzewającej herbaty pochodzącej z chińskiej prowincji Yunnan. 
                    Liście pu-erhów suszone są na słońcu, a następnie poddawane procesowi dojrzewania. Etap ten tradycyjnie mógł przebiegać nawet 
                    kilkadziesiąt lat, przez co w obliczu rosnącego zainteresowania ilość dostępnej herbaty szybko okazała się niewystarczająca. 
                    Odkryty w latach 60 XX wieku proces przyspieszonej fermentacji pozwolił na produkcję herbat podobnych w smaku do dojrzałych, 
                    wieloletnich pu-erhów, szybko zjednując sobie podniebienia herbatystów na całym świecie, w wielu miejscach popularnością 
                    przebijając swój tradycyjny pierwowzór. Herbaty naturalnie dojrzewające (sheng pu-erh) dają złotawy napar o świeżym, często 
                    nieco cierpkim smaku i kwiatowym aromacie. Te poddane fermentacji metodą przyspieszoną (shu pu-erh) charakteryzują się ciemnym, 
                    niemal nieprzezroczystym naparem oraz głębokim, gładkim smakiem i aromatem kojarzącym się ze świeżą wilgotną ziemią lub mokrym 
                    drewnem. 
                    <br/>
                    <br/>
                        <span className='learn_brewing-tips'>
                            Zalecana temteratura parzenia: 
                        </span>
                        100*C
                </p>
                <hr/>
            </div>
            <br/>
            <p className='inonsInfo'>
                Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </p>
        </div>
    )
}

export default LearnAboutTea;