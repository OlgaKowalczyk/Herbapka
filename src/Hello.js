import React from 'react';

// const yourMagicVar = 'hey'
// const magicObject = {
//     yourMagicVar: 'you',
//     hey: 'hello there',
// }
// console.log('1:', magicObject[yourMagicVar])
// console.log('2:', magicObject["yourMagicVar"])
// console.log('3:',magicObject.yourMagicVar)


const Hello = () => {
    return(
        <div className='container hello hidden-container'>   
            <div className='citation hidden-div'>
                {/* <h1>Witaj na herbacianym szlaku!</h1> */}
                <div>
                Filozofia herbaty nie jest estetyzmem w zwykłym znaczeniu tego słowa, 
                wspólnie bowiem z etyką i religią wyraża cały nasz sposób widzenia człowieka i natury. 
                Jest higieną, gdyż zmusza nas do czystości; ekonomią, bo uczy, że w prostocie, a nie w złożoności 
                i przepychu, znaleźć można wygodę; moralną geometrią, ponieważ określa nasze poczucie proporcji 
                w stosunku do wszechświata. Wyraża prawdziwego ducha demokracji Wschodu, czyniąc wszystkich swych 
                wyznawców arystokratami smaku.<br/><br/>
                <p className='citation_source'>Kakuzo Okakura, <span className='citation_source-title'>Księga herbaty</span></p>
                </div>
            </div>    


    
        </div>  
    )
}

export default Hello;