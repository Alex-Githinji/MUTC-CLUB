import Event from "./Event";
import "./events.css"


const Events = () => {
    return(
        <section>
            <div>
    <div Events-section>
        <Event Eventleader="Webster Ifedha"
        EventName="cyber Security"
        EventTime="Monday-(4:00 pm to 7:00pm"
        EventPlace={"Computer lab F04"}
        />

    </div>
    <div Events-section>
        <Event Eventleader="Manase Gunga"
        EventName="UI/UX"
        EventTime="Tuesday-(5:00 pm to 8:00pm"
        EventPlace={"Computer lab F04"}
        />

    </div>
    <div Events-section>
        <Event Eventleader=" Carolyne Githenduka."
        EventName="Web development"
        EventTime="Wednesday-(6:00 pm to 9:00pm"
        EventPlace={"Computer lab F04"}
        />

    </div>
    <div Events-section>
        <Event Eventleader="Stanley Amunze."
        EventName="Mobile apps development"
        EventTime="Thursday-(4:00 pm to 7:00pm"
        EventPlace={"Computer lab F04"}
        />

    </div>
    <div Events-section>
        <Event Eventleader="Paul Karanja"
        EventName="Cloud engineering "
        EventTime="Monday-(3:00 pm to 6:00pm"
        EventPlace={"Computer lab F04"}
        />

    </div>
    <div Events-section>
        <Event Eventleader="Evyonn Mbithe."
        EventName="power platform"
        EventTime="friday-(4:00 pm to 7:00pm"
        EventPlace={"Computer lab F04"}
        />

    </div>
    
    </div>
    </section>



    )
}

export default Events;