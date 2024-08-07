import Section from './section.js'
import Bg from '../../img/main_visual_fullscreen.jpg'
import Svicon from '../../img/i-appicon.svg'
import './main.css'
import Footer from '../footer/footer.js'

const Main = ()=>{
    const contents= [
        {
        id : '1',
        title : '24시간 언제나',
        text : '한밤중이나 주말에도',
        text2 : '스마트폰으로 시간에 구애받지 않고',
        text3 : '쏘카와 함께 이동하세요.',
        img : '/asset/usp_a.jpg'
    },{
        id : '2',
        title : '원하는 곳에서',
        text : '내 주변 3분 거리 쏘카존에서',
        text2 : '혹은 내가 있는 곳으로 쏘카를 불러',
        text3 : '어디서나 편하게 출발하세요.',
        img : '/asset/usp_b.jpg'
    },{
        id : '3',
        title : '필요한 시간만큼',
        text : '간단한 장보기부터 주말여행까지',
        text2 : '10분 단위로 원하는 만큼만 이용하세요.',
        text3 : '',
        img : '/asset/usp_c.jpg'
    },{
        id : '4',
        title : '다양한 차종을',
        text : '연인과의 드라이브부터 가족 캠핑까지',
        text2 : '상황에 맞게 50여 종의 차량을',
        text3 : '선택해서 이용하세요.',
        img : '/asset/usp_d.jpg'
    },
]
    return (
        <>
        <main>
            <div className="bgImg">
                <img src={Bg} alt='background img' />
                <h2>차가 필요한 <br /> 모든 순간, 쏘카</h2>
            </div>
            <Section contents={contents} />
            <div className="downWrap">
                <a href="#">
                    <img src={Svicon} alt="ssoca"/>
                    <p></p>
                </a>
            </div>
        </main>
        <Footer />
        </>
    )
}
export default Main;