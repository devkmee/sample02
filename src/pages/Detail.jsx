import { useSearchParams } from 'react-router-dom';
import characterData from '../datas/character';
import '../pages/Detail.css';
import LEFT from '../components/cmm/Left.jsx';

function CharacterTable({ character }) {
    return (
        <>
            <LEFT></LEFT>
            <table>
                <tbody>
                    {Object.entries(character).map(([key, value]) => (
                        <tr key={key}>
                            <th>{key}</th>
                            <td>{String(value)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

function Detail() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const character = characterData.find((char) => char.id === id);
    console.log('character:', character);

    return (
        <div style={{ display: 'flex', gap: '50px' }}>
            <img
                src={`.../../../assets/images/character/${id}.png`}
                alt={character.name}
                style={{
                    flex: 1,
                    width: '00px',
                    maxHeight: '300px',
                    padding: '50px',
                }}
            ></img>
            <div>
                {character.nameDesc ? (
                    <h1 style={{ textAlign: 'center', marginBottom: '100px' }}>{character.nameDesc}</h1>
                ) : (
                    <h1 style={{ textAlign: 'center', marginBottom: '100px' }}>{character.name}</h1>
                )}
                <CharacterTable character={character} />
            </div>
        </div>
    );
}

export default Detail;
