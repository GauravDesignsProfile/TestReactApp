import CardStrip from "../CardStrip/CardStrip";
import Navigation from "../Navigation/Navigation";
import "./Notes.css";
import Image from "../Images/pexels-madison-inouye-1937337.jpg";
import { Link } from "react-router-dom";

function Notes(){
    return(
        <>
            <Navigation />
            <div className="NotesCon">
                <div className="Topics">
                    <h3>Topics</h3>
                    <div className="filter">
                        <Link>Student Laws</Link>
                        <Link>Student Laws</Link>
                        <Link>Student Laws</Link>
                        <Link>Student Laws</Link>
                    </div>
                </div>
                <div className="CardContainer">
                    <h3>Notes</h3>
                    <CardStrip Image={Image} TopicName="Student Law 1" Category="Student Law" FileURL="https://dummyjson.com/products/1" filename="Test.json"/>
                    <CardStrip Image={Image} TopicName="Student Law 1" Category="Student Law" FileURL="https://dummyjson.com/products/1" filename="Test.json"/>
                    <CardStrip Image={Image} TopicName="Student Law 1" Category="Student Law" FileURL="https://dummyjson.com/products/1" filename="Test.json"/>
                    <CardStrip Image={Image} TopicName="Student Law 1" Category="Student Law" FileURL="https://dummyjson.com/products/1" filename="Test.json"/>
                </div>
            </div>
        </>
    );
}

export default Notes;