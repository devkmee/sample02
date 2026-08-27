import data from '../../datas/character';
import logo from '../../assets/images/logo.png';
import './left.css';
import { useSearchParams, useNavigate } from 'react-router-dom';
export default function LEFT() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const page = searchParams.get('page');

    const cha1 = data.find((char) => char.id === 'char_1');
    const cha2 = data.find((char) => char.id === 'char_2');

    const handleClick = (page) => {
        let url = '';
        switch (page) {
            case 0:
                url = '/';
                break;
            case 1:
                url = `/detail?id=${cha2.id}`;
                break;
            case 2:
                url = `/detail?id=${cha1.id}`;
                break;
            case 3:
                url = '/relation';
                break;
        }
        // navigate(`/$[pageName?page=${id}`)
        navigate(`${url}`);
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
                    <ol id="0" onClick={() => handleClick(0)} className={page === '0' ? 'active' : ''}>
                        1. Intro
                    </ol>
                    <ol id="1" onClick={() => handleClick(1)} className={page === '1' ? 'active' : ''}>
                        2. {cha2?.nameKor}
                    </ol>
                    <ol id="2" onClick={() => handleClick(2)} className={page === '2' ? 'active' : ''}>
                        3. {cha1?.nameKor}
                    </ol>
                    <ol id="3" onClick={() => handleClick(3)} className={page === '3' ? 'active' : ''}>
                        4. 관계 및 서사
                    </ol>
                </ul>
            </div>
        </div>
    );
}
