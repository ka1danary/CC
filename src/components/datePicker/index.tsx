interface Props {}

export const DatePicker: React.FC<Props> = () => {
  const lenghtRange = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  return (<div>
    {lenghtRange.map((el, index) => (
        <div key={index}>
            <button>
                {el} : 00 
            </button>
        </div>
    ))}
  </div>)
};
