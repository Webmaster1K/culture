import './Main.css';
import { useState } from 'react';

function Main() {

  const [visible, setVisible] = useState(true),
        [visible1, setVisible1] = useState(true),
        [visible2, setVisible2] = useState(true),
        [visible3, setVisible3] = useState(true),
        [visible4, setVisible4] = useState(true),
        [visible5, setVisible5] = useState(true),
        [visible6, setVisible6] = useState(true),
        [visible7, setVisible7] = useState(true)

  let text = {},
      text1 = {},
      text2 = {},
      text3 = {},
      text4 = {},
      text5 = {},
      text6 = {},
      text7 = {}
  if (!visible){
    text={display: 'block', marginLeft: '-600px', marginTop: '-50px', width: '500px'}
  }
  if (!visible1){
    text1={display: 'block', marginLeft: '100px', marginTop: '-50px', width: '500px'}
  }
  if (!visible2){
    text2={display: 'block', marginLeft: '-350px', marginTop: '-145px', width: '245px'}
  }
  if (!visible3){
    text3={display: 'block', marginLeft: '-550px', marginTop: '-50px'}
  }
  if (!visible4){
    text4={display: 'block', marginLeft: '150px', marginTop: '-50px'}
  }
  if (!visible5){
    text5={display: 'block', marginLeft: '100px', marginTop: '-145px', width: '245px'}
  }
  if (!visible6){
    text6={display: 'block', marginLeft: '-500px', marginTop: '-30px'}
  }
  if (!visible7){
    text7={display: 'block', marginLeft: '100px', marginTop: '-30px'}
  }

  return (
    <main className='main'>
      <div className="people">
        <div className="head">
          <div className="circle" onClick={()=> setVisible(!visible)}><div style={text} className="text">Недуховный человек – это человек, который существует, полагаясь исключительно на зрение, обоняние, вкус, слух и осязание. При этом он тяжко обременён враждебностью, ревностью, завистью, мстительностью.</div></div>
          <div className="circle" onClick={()=> setVisible1(!visible1)}><div style={text1} className="text">Духовный человек - это человек, которому свойственны высокие нравственные нормы. Он проявляет прекрасные качества, характеризующие его как уравновешенную личность, способного на высокие поступки, готового прийти на помощь ближнему. Он стремится к истине, познает её и живёт в согласии с ней.</div></div>
        </div>
        <div className="torso">
          <div className="arm-left">
            <div className="circle" onClick={()=> setVisible2(!visible2)}><div style={text2} className="text">Качества недуховного человека:
              <ul>
                <li>гордыня</li>
                <li>ненависть</li>
                <li>зависть</li>
                <li>уныние</li>
                <li>ревность</li>
              </ul>
            </div></div>
          </div>
          <div className="belly">
            <div className="circle" onClick={()=> setVisible3(!visible3)}><div style={text3} className="text">Становление бездуховным человеком:
            <br/>чрезмерная приземленность, безнравственность, меркантильность, погоня за всевозможными материальными благами. Эгоистичное и лицемерное отношение к окружающему миру.</div></div>
            <div className="circle" onClick={()=> setVisible4(!visible4)}><div style={text4} className="text">Становление духовным человеком:
            <br/>всестороннее саморазвитие, самовоспитание духовных качеств, патриотическое воспитание, приобретение духовных ценностей - гуманизма, дружбы, любви, уважения и др.</div></div>
          </div>
          <div className="arm-right">
            <div className="circle" onClick={()=> setVisible5(!visible5)}><div style={text5} className="text">Качества духовного человека: 
              <ul>
                <li>патриотизм</li>
                <li>доброта</li>
                <li>бескорыстие</li>
                <li>любовь</li>
                <li>сострадание</li>
              </ul>
            </div></div>
          </div>
        </div>
        <div className="legs">
          <div className="leg-left">
            <div className="circle" onClick={()=> setVisible6(!visible6)}><div style={text6} className="text">Итог: 
            <br/>недуховнй человек руководствуется разрушительными и эгоистичными качествами, которые ведут к саморазрушению личности, пагубно влияют на окружающий мир и общество.</div></div>
          </div>
          <div className="leg-right">
            <div className="circle" onClick={()=> setVisible7(!visible7)}><div style={text7} className="text">Итог:
            <br/>В духовной личности преобладают созидающие, возвышенные, благородные, чистые качества, которые и делают её человеком. Она создаёт основу для личностной целостности, обеспечивает гармоничное существование, помогает строить социальные и межличностные отношения.
            <br/>Духовность способствует выживанию и развитию человечества.</div></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;