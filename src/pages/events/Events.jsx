import Event from "./Event";
import "./events.css";

const Events = () => {
  return (
    <section>
      <div className="leaders">
        <div className="overview">
          <h1 class="overview1">These are the available Events</h1>
          <p class="overview2">Book a sesion to learn something new with us</p>
        </div>
      </div>
      <div className="section-header">
        <div Events-section>
          <Event
            Eventleader=" Leader Name :Webster Ifedha"
            EventName="cyber Security"
            EventTime="Monday-(4:00 pm to 7:00pm"
            EventPlace={"Computer lab F04"}
            BookSession={"Book session"}
          />
        </div>
        <div Events-section>
          <Event
            Eventleader=" Leader Name :Manase Gunga"
            EventName="UI/UX"
            EventTime="Tuesday-(5:00 pm to 8:00pm"
            EventPlace={"Computer lab F04"}
            BookSession={"Book session"}
          />
        </div>
        <div Events-section>
          <Event
            Eventleader=" Leader Name :Carolyne Githenduka."
            EventName="Web development"
            EventTime="Wednesday-(6:00 pm to 9:00pm"
            EventPlace={"Computer lab F04"}
            BookSession={"Book session"}
          />
        </div>
        <div Events-section>
          <Event
            Eventleader="Leader Name :Stanley Amunze."
            EventName="Mobile apps development"
            EventTime="Thursday-(4:00 pm to 7:00pm"
            EventPlace={"Computer lab F04"}
            BookSession={"Book session"}
          />
        </div>
        <div Events-section>
          <Event
            Eventleader="Leader Name :Paul Karanja"
            EventName="Cloud engineering "
            EventTime="Monday-(3:00 pm to 6:00pm"
            EventPlace={"Computer lab F04"}
            BookSession={"Book session"}
          />
        </div>
        <div Events-section>
          <Event
            Eventleader="Leader Name :Evyonn Mbithe."
            EventName="power platform"
            EventTime="friday-(4:00 pm to 7:00pm"
            EventPlace={"Computer lab F04"}
            BookSession={"Book session"}
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
