import data from '../../datas/character';
import logo from '../../assets/images/logo.png';
import './left.css';

export default function LEFT() {
    console.log('data:', data);
    const cha1 = data.find((char) => char.id === 'char_1');
    const cha2 = data.find((char) => char.id === 'char_2');
    console.log('cha1:', cha1);
    console.log('cha2:', cha2);

    return (
        <div>
            <div id="home"></div>

            <img src={logo} alt="logo" width="300" height="auto" style={{ padding: '10px', margin: '20px' }} />
            <div style={{ backgroundColor: '#fce1fc', width: '300px', padding: '10px', margin: '20px' }}>
                <ul style={{ textAlign: 'left', padding: '20px' }}>
                    <ol>1.Intro...</ol>
                    <ol>2.{cha2.nameKor}</ol>
                    <ol>3.{cha1.nameKor}</ol>
                    <ol>4.관계 및 서사</ol>
                </ul>
            </div>
        </div>
    );
}
