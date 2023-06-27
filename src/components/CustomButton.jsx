

const CustomButton = ({onClick,text,customClass}) => {
  return (
    <button className={customClass} onClick={onClick}>{text}</button>
  )
}

export default CustomButton