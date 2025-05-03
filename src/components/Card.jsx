import Button from "./Button";

const Card = ({id, image, title, desc, toggle, onToggleChange, onRemove }) => {
  const handleToggle = (e) => {
    onToggleChange(id, e.target.checked);
  }

  return (
    <article className="bg-Neutral0 rounded-2xl p-4 shadow-sm flex flex-col gap-6 justify-between dark:bg-Neutral800 dark:border-[0.2px] border-Neutral600 h-auto">
      <div className="flex gap-4 items-start">
        <img src={image} alt="image" />
        <div>
          <h2 className="font-bold text-lg dark:text-Neutral0">{title}</h2>
          <p className="text-Neutral600 font-normal text-sm max-w-[80%] dark:text-Neutral300" >{desc}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button className="border-[0.2px] 
        text-sm border-Neutral600 px-4 py-2 dark:text-Neutral0 dark:bg-transparent hover:bg-Red400 hover:text-white hover:border-0 dark:hover:text-inherit"
        onClick={() => onRemove(id)} >Remove</Button>
        <input type="checkbox" className="toggle bg-Neutral300 checked:bg-Red700 dark:border-0 dark:checked:bg-Red400" onChange={handleToggle} checked={toggle}/>
      </div>
    </article>
  );
};

export default Card;
