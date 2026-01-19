import "./App.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
const recipes = [
 {
  title: "Classic Spaghetti Carbonara",
 ingredients: ["Pasta", "Eggs", "Pancetta", "Parmesan Cheese", "Garlic"],
 imageUrl:
   "https://media.istockphoto.com/id/2194752293/photo/spaghetti-alla-carbonara-with-mushroom-and-fork-served-in-dish-isolated-on-wooden-table-side.webp?a=1&b=1&s=612x612&w=0&k=20&c=A_LcyoOALQOsPpZArU4JKLIc-QW1Xw6v6SoqK4OUHPE=",
  instructions:
   "Cook pasta, fry pancetta, mix with eggs and cheese, combine.",
  objectID: 1,
 },
{
    title: "Chicken Tikka Masala",
    ingredients: ["Chicken", "Yogurt", "Tomato Sauce", "Spices", "Cream"],
    imageUrl:
     "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",   
    instructions:"Marinate chicken, grill, simmer in spiced tomato sauce with cream.",
    objectID: 2,
 },
 {
   title: "Qabuli Pulao",
    ingredients: ["Rice", "Lamb", "Carrots", "Raisins", "Spices"],
    imageUrl:
     "https://media.istockphoto.com/id/2179624040/photo/kabuli-pulao-pilaf-the-national-dish-of-afghanistan.jpg?s=612x612&w=0&k=20&c=mNjhML4iQPVEYzVzmwFDxpWboq3udscrTIROikvUfdM=",
    instructions:"Cook rice, layer with spiced lamb and vegetables, steam.",
    objectID: 3,
 },

  {
   title: "karahi Gosht",
    ingredients: ["Chicken", "Tomatoes", "Green Chilies", "Ginger", "Garlic"],
    imageUrl:
     "https://media.istockphoto.com/id/1934216220/photo/spicy-chicken-karahi-korma-masala-with-gravy-served-in-karahi-isolated-on-grey-background.jpg?s=612x612&w=0&k=20&c=DwBAZ9jWpqxiSEQlYDksxrWYA9jzenNhoTWeJV5JuKc=",
    instructions:"Cook chicken with tomatoes and spices in a wok.",
    objectID: 4,
 }

];
function App() {
 return (
  <div className="card-container">
   {recipes.map((recipe) => (
    <Card key={recipe.objectID} className="recipe-card" >
     <Card.Img variant="top" src={recipe.imageUrl} alt={recipe.title} style={{ width: "18rem" } }/>
     <Card.Body>
      <Card.Title>{recipe.title}</Card.Title>
      <ListGroup variant="flush">
       {recipe.ingredients.map((ingredient, index) => (
        <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
       ))}
      </ListGroup>
      <Card.Text>{recipe.instructions}</Card.Text>
     </Card.Body>
    </Card>
   ))}
  </div>
 );
}
export default App;
