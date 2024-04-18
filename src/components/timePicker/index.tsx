interface Props {
  setTime: (time: number) => void;
}

export const TimePicker: React.FC<Props> = ({ setTime }) => {
  const lenghtRange = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const handleSet = (el: number) => {
    setTime(el);
  };

  return (
    <div>
      {lenghtRange.map((el, index) => (
        <div key={index} onClick={() => handleSet(el)}>
          <button>{el} : 00</button>
        </div>
      ))}
    </div>
  );
};
