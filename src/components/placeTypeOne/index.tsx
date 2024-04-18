interface Props {
    options: number[];
    value: number | undefined;
    setValue: (value : number | undefined) => void
}

export const PlaceTypeOne: React.FC<Props> = ({options, setValue}) => {

const handleSet = (el : number) => {
    setValue(el)
}

    return (
        <div>
           {options.map((el, index) => (
            <div key={index} onClick={ () => handleSet(el)}>
                {el}
            </div>
           ))}
        </div>
    )
};