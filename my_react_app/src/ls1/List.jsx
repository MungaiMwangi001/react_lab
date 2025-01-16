import propTypes from 'prop-types'

function List (props){
    // const fruits = [{ id:1,  name:"apple", calories: 95}, 
  //   {id:2, name: "Orange", calories: 45}, 
  //   {id:3, name: "Banana", calories: 105}, 
  //   {id:4, name: "coconut", calories: 159}, 
  //   {id:5, name: "Pineaple", calories: 37} ];

  // const vegetables = [{ id:6,  name:"cabbage", calories: 78}, 
  //     {id:7, name: "kales", calories: 4}, 
  //     {id:8, name: "coriander", calories: 10}, 
  //     {id:9, name: "cauli", calories: 19}, 
  //     {id:10, name: "brocolli", calories: 7} ];

  //{fruits.length > 0 ? <List items={fruits} category="fruits"/> :null}; //using a ternary operator
  //{vegetables.length > 0  && <List items={vegetables} category='vegetables' />  } //short-circuit the  statement

    const itemlist = props.items
    const category = props.category;
    

    const listItems = itemlist.map(item => <li key={item.id}>
        {item.name } : &nbsp; &nbsp;  &nbsp;
          <b>{item.calories}</b></li>)
    return (  
        <>        
        <h3 className="list-category">{category}</h3>
        <ul className="list-items">{listItems}</ul>
        </>
    );
}
List.propTypes = {
    category : propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({ id: propTypes.number,
                                               name: propTypes.string,
                                               calories: propTypes.number
                                            })
                                        )}

List.defaultProps = {
    category: "Category",
    items: []
}




export default  List

//const fruits = ["apples", "orange", "banana", "coconut", "pineapples"]

    // fruits.sort((a,b) => a.name.localeCompare(b.name)) //alphabetical order
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) //ReverseAlphabetical order
    //fruits.sort((a,b) => a.calories - b.calories) //numerical order

    // const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalorieFruits = fruits.filter(fruit => fruit.calories >= 100)