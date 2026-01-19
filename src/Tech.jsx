import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const events = [
 {
  title: "Tech Conference 2023",
  date: "March 15, 2023",
  location: "New York, NY",
  imageUrl:
   "https://media.istockphoto.com/id/2190572397/photo/modern-collaborative-office-space-with-diverse-professionals-working-in-a-co-working.webp?a=1&b=1&s=612x612&w=0&k=20&c=VWl8bQxA7uEjYV1ZKyrs3lT-gs0PCiOGiivrRF1Mwy4=",
  description:
   "Join us for a day of tech talks and networking with industry leaders.",
  objectID: 1,
 },
 {
    title: "AI & Machine Learning Summit",
    date: "April 22, 2025",
    location: "San Francisco, CA",
    imageUrl:
     "https://media.istockphoto.com/id/1516277094/photo/young-female-teacher-giving-a-data-science-presentation-in-a-dark-auditorium-with-projecting.webp?a=1&b=1&s=612x612&w=0&k=20&c=HrAD9HLIsGfFopR6w90FwTPyseMWkeWjtHeXy2D9nBg=",
    description:
     "Explore the latest advancements in AI and machine learning at this premier summit.",
    objectID: 2,
 },
 {
    title: "Cybersecurity Workshop",
    date: "May 10, 2025",
    location: "Chicago, IL",
    imageUrl:
     "https://plus.unsplash.com/premium_photo-1663054500009-d4fc1a8ad953?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEN5YmVyc2VjdXJpdHklMjBXb3Jrc2hvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    description:
     "Hands-on workshop focusing on the latest cybersecurity threats and defenses.",
    objectID: 3,
 }
];
function App() {
 return (
  <div className="card-container">
   {events.map((event) => (
    <Card key={event.objectID} className="event-card">
     <Card.Img variant="top" src={event.imageUrl} alt={event.title} />
     <Card.Body>
      <Card.Title>{event.title}</Card.Title>
      <Card.Subtitle>
       {event.date} - {event.location}
      </Card.Subtitle>
      <Card.Text>{event.description}</Card.Text>
      <Button variant="primary">Register Now</Button>
     </Card.Body>
    </Card>
   ))}
  </div>
 );
}
export default App;
