import styles from './index.module.scss'

interface Props {
    title : string;
    options : string[];
    setOption : (el : "PC" | "PS" | "VR") => void
}

export const CustomSelector: React.FC<Props> = ({title, options, setOption}) => {
    return (
        <form className={styles.CustomSelector}>
            <div>
                {title}
            </div>
            <div>
                {options.map((el, index) => (
                    <div key={index}>
                        {el}
                    </div>
                ))}
            </div>
            <select>
                <option disabled selected>
                    {title}
                </option>
                {options.map((el, index) => (
                    <option key={index} value={el}>
                        {el}
                    </option>
                ))}
            </select>
        </form>
    )
};