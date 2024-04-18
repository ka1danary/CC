import { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";

type optionsType = "PC" | "PS" | "VR" | string
interface Props {
  title: string;
  options: string[];
  setOption: (el: optionsType) => void;
}

export const CustomSelector: React.FC<Props> = ({
  title,
  options,
  setOption,
}) => {
  const [vision, setVision] = useState<boolean>(false);
  const [isTitle, setIsTitle] = useState<string | undefined>(title);

  const selectorRef = useRef<HTMLDivElement>(null); // Ref для корневого элемента компонента

  useEffect(() => {
    // Функция-обработчик события клика по всему документу
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setVision(false); // Закрываем меню, если клик был за пределами компонента
      }
    };

    // Добавляем обработчик события клика при монтировании компонента
    document.addEventListener("mousedown", handleClickOutside);

    // Удаляем обработчик события клика при размонтировании компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Пустой массив зависимостей означает, что эффект будет вызван только при монтировании и размонтировании компонента


  const root = [styles.CustomSelectorDrop];

  if (vision) {
    root.push(styles.Active);
  }

  const handleVision = (newTitle :optionsType) => {
    setVision(false)
    setIsTitle(newTitle)
    setOption(newTitle)
  }

  return (
    <form className={styles.CustomSelector}>
      <div onClick={() => setVision(!vision)}>{isTitle}</div>
      <div className={root.join(" ")}>
        {options.map((el, index) => (
          <div key={index} onClick={() => handleVision(el)}>
            {el}
          </div>
        ))}
      </div>
    </form>
  );
};
