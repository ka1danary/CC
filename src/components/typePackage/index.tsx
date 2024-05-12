import { package_type } from '../../store/models/dbModels/models';
import style from './index.module.scss'

interface Props {
    setType : (type : package_type) => void;
    types: package_type[];
}

export const TypePackage: React.FC<Props> = ({setType, types} ) => {

    const handleSet = (type : package_type) => {
        const typeValue = type ?? 1
        setType(typeValue)
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