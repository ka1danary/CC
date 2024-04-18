import { packageType } from '../../store/models/IModel';
import style from './index.module.scss'

interface Props {
    setType : (type : packageType) => void;
    types: packageType[];
}

export const TypePackage: React.FC<Props> = ({setType, types} ) => {

    const handleSet = (el : number) => {
        setType(el)
    }

    return (
        <div className={style.Container}>
            {types.map((el, index) => (
                <button key={index} onClick={() => handleSet(el)}>
                    {el}
                </button>
            ))}
        </div>
    )
};