import styles from './index.module.scss'

interface Props {
  placeholder?: string | undefined;
  setValue: (value: string) => void;
  value: string;
  type: string;
  width: string;
}

export const CustomInput: React.FC<Props> = ({
  placeholder,
  setValue,
  value,
  type,
  width,
}) => {
  

  return (
    <div className={styles.Content}>
      <input
        placeholder={placeholder}
        className={styles.CustomInput}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type={type}
        style={{ width: width }}
      />
      
    </div>
  );
};
