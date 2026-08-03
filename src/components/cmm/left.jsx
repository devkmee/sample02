import data from '../../datas/character';
import logo from '../../assets/images/logo.png';
import './left.css';
import { useSearchParams, useNavigate } from 'react-router-dom';
export default function LEFT() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const page = searchParams.get('page');

    console.log('data:', data);
    const cha1 = data.find((char) => char.id === 'char_1');
    const cha2 = data.find((char) => char.id === 'char_2');
    console.log('cha1: ', cha1);
    console.log('cha2:', cha2);

    const handleClick = (id) => {
        navigate(`/detail?page=${id}`);
    };

    return (
        <div>
            <div id="home"></div>

            <img src={logo} alt="logo" width="300" height="auto" style={{ padding: '10px', margin: '20px' }} />
            <div
                style={{
                    backgroundColor: '#fce1fc',
                    width: '300px',
                    height: '600px',
                    padding: '10px',
                    margin: '20px',
                }}
            >
                <ul style={{ textAlign: 'left', padding: '20px' }}>
                    <ol id="0" onClick={() => handleClick(0)} style={{ color: page === '0' ? 'red' : 'black' }}>
                        1.Intro...
                    </ol>
                    <ol id="1" onClick={() => handleClick(1)} style={{ color: page === '1' ? 'red' : 'black' }}>
                        2.{cha2.nameKor}
                    </ol>
                    <ol id="2" onClick={() => handleClick(2)} style={{ color: page === '2' ? 'red' : 'black' }}>
                        3.{cha1.nameKor}
                    </ol>
                    <ol id="3" onClick={() => handleClick(3)} style={{ color: page === '3' ? 'red' : 'black' }}>
                        4.관계 및 서사
                    </ol>
                </ul>
            </div>
        </div>
    );
}
