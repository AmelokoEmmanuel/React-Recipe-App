import styles from "./Component/foodItem.module.css"

export default function FoodItem({food, setfoodId}){
    const handleClick = ()=>{
        setfoodId(food.id);
    }
    return(
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src= {food.image} alt=""/>
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
            </div>

            <div className={styles.buttonContainer}>
            <button className={styles.itemButton}>View Recipe...</button>
            </div>
        </div>
    )
}